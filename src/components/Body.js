import { useState, useEffect, useContext } from "react";
import RestaurantCard, {enhancedResCard} from "./RestaurantCard";
import { Shimmer, Sorting_Shimmer } from "./Shimmer";
import {Link} from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import { enhancedResCard } from "./RestaurantCard";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const userStatus=useUserStatus();

  const PromotedResCard=enhancedResCard(RestaurantCard);

  const {loggedInUser, setUserName}=useContext(UserContext);
  

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const listOfRestaurant = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await listOfRestaurant.json();

 

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

 

  if (restaurantList.length === 0) {
    return (
      <div>
        <Sorting_Shimmer />
        <Shimmer />
      </div>
    );
  }

  

  if(userStatus===false){
    return <h1>You don't have Internet connetion, Please connect to internet</h1>
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterRes"
          onClick={() => {
            const filterRest = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filterRest);
         
          }}
        >
          Top Restaurants
        </button>
        <div className="search-container">
          <input
          className="filterRes placeholder:font-light placeholder:text-gray-400"
          placeholder="Search for Restaurant"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
          className="filterRes"
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restlist">
        {filteredRestaurant.map((rest) =>(
          <Link to={`restaurant/${rest.info.id}`} key={rest.info.id}>{rest.info.avgRating>4.2?<RestaurantCard resData={rest}/>:<PromotedResCard  resData={rest}/>}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
