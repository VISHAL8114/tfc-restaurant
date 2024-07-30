import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import Header from "./Header";
import { Link } from "react-router-dom";

const BodyLayout = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json);
        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
    };

    const handleFilterButtonClick = () => {
        const filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4);
        setFilteredRestaurant(filtered);
    };

    const handleSearchButtonClick = () => {
        const filtered = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filtered);
    };

    return listOfRestaurants.length === 0 ? (
        <div>
            <Header />
            <Shimmer />
        </div>
        
    ) : (
        <div>
            <Header />
        <div className="bg-gray-200 p-4">
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search a restaurant you want..."
                    className="border-2 border-black w-2/5 p-2"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="text-white text-sm bg-mediumGreen px-5 rounded-r-md" onClick={handleSearchButtonClick}>
                    Search
                </button>
                <button onClick={handleFilterButtonClick} className="bg-mediumGreen ml-8 text-sm text-white px-5 rounded-md">
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
        </div>
    );
};

export default BodyLayout;
