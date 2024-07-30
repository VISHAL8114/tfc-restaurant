import { API_URL, MENU_URL } from "../utils/constants";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resmen, setResmen] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_URL + resId);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json);
            setResmen(json);
        } catch (error) {
            console.error("Failed to fetch data:", error);
            setError(error.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (resmen === null) {
        return(
          <div>
            <Header />;
            <Shimmer />;
          </div>
          
        ) 
    }

    // Ensure resmen.data exists before accessing nested properties
    if (!resmen.data) {
        return <div>Error: Data not available</div>;
    }
    
    const { name, cuisines, costForTwoMessage, costForTwo, cloudinaryImageId, avgRating, deliveryTime } =
        resmen?.data?.cards?.[2]?.card?.card?.info || {};

    let itemCards = [];
    const cardData = resmen?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(cardData[4].card.card.itemCards);
    itemCards = cardData[4].card.card.itemCards;
        if (cardData[3]?.card?.card?.itemCards) {
          itemCards =cardData[3]?.card.card.itemCards;
        }
        else if (cardData[2]?.card?.card?.itemCards) {
          itemCards =cardData[2]?.card.card.itemCards;
        } else if (cardData[4]?.card?.card?.itemCards) {
          itemCards =cardData[4]?.card.card.itemCards;
        }else if(cardData[1]?.card?.card?.itemCards){
          itemCards =cardData[1]?.card.card.itemCards;

        }
    return (
        <div>
            <Header />
            <h1>{name}</h1>
            <div>{cuisines && cuisines.join(", ")}</div>
            <div>
                {
                    itemCards.map((item) => (
                        <div key={item.card.info.id} className="menu-card">
                            <h2 className="menu-name">{item.card.info.name}</h2>
                            <h3 className="menu-price">
                                ₹
                                {item.card.info.price / 100 ||
                                    item.card.info.defaultPrice / 100}
                            </h3>
                            <h4 className="menu-description">
                                {item.card.info.description}
                            </h4>
                            <div className="menu-card-right">
                                <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
