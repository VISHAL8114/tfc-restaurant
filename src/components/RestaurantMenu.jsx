import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { CDN_URL } from '../utils/constants';
const RestaurantMenu = () => {
  const [resmen, setresmen] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setresmen(json);
    console.log(json);
  };

  if (resmen === null) return <Shimmer />;

  let itemCards;
  if (resmen.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card) {
    itemCards =
      resmen.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card
        ?.card.itemCards;
  }
  if (resmen.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card) {
    itemCards =
      resmen.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
        ?.card.itemCards;
  } else if (resmen.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card) {
    itemCards =
      resmen.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card
        ?.card.itemCards;
  }

  const { name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime, } =
    resmen?.data?.cards[2]?.card?.card?.info;

    return (
        <div className="menu">
          <header className="menu-header">
            <div className="menu-header-left">
              <img src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" />
            </div>
            <div className="menu-header-right">
              <div className="top">
                <h1>{name}</h1>
                <h3>{cuisines.join(', ')}</h3>
              </div>
              <div className="bottom">
                <h4 className="avg-rating">
                  <span
                    className="icons"
                    style={{
                      position: 'relative',
                      top: '2px',
                      marginRight: '3px',
                    }}
                  >
                  </span>
                  <span>{avgRating}</span>
                </h4>
                <h4 className="time">
                  <span
                    className="icons"
                    style={{
                      position: 'relative',
                      top: '2px',
                      marginRight: '3px',
                    }}
                  >
                  </span>
                  <span> {deliveryTime} MINS</span>
                </h4>
                <h3>{costForTwoMessage}</h3>
              </div>
            </div>
          </header>
    
          <div className="menu-main">
            <h2>Menu</h2>
            <h3 className="items">{itemCards.length} items</h3>
            <div className="menu-main-card-container">
              {itemCards.map((item) => (
                <div key={item.card.info.id} className="menu-card">
                  <div className="menu-card-left">
                    <h2 className="menu-name">{item.card.info.name}</h2>
                    <h3 className="menu-price">
                      ₹
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </h3>
                    <h4 className="menu-description">
                      {item.card.info.description}
                    </h4>
                  </div>
                  <div className="menu-card-right">
                    <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
                  </div>
                </div>
              ))}
    
            </div>
          </div>
        </div>
      );
};

export default RestaurantMenu;
