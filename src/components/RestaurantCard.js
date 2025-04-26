import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { CMD_URL } from "../utils/common";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, areaName } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  console.log(resData);
  return (
    <div className="res-card-container">
      <div className="img-container">
        <img className="res-img" src={CMD_URL + cloudinaryImageId} />
      </div>
      <div className="res-name">
        <h3>{name}</h3>
      </div>
      <div className="res-details-container">
        <ul className="res-details">
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          <li>
            {avgRating}{" "}
            <FontAwesomeIcon
              icon={faCaretRight}
              size="2xs"
              style={{ color: "black" }}
            />
          </li>
          <li>
            <p> {deliveryTime} mins</p>
          </li>
        </ul>
      </div>
      <div className="res-food-add">
        <ul className="truncated-text">
          <li>{cuisines.join(" , ")}</li>
          <li>{areaName}</li>
        </ul>
      </div>
    </div>
  );
};



export const enhancedResCard=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black  text-white p-2 m-4 rounded-sm">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
