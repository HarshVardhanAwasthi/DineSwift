import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Link, useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";
import NestedItemCategory from "./NestedItemCategory";

const RestaurantInfo = () => {
  const { resId } = useParams();

  const { resInfo, resMenu } = useRestaurantInfo(resId);

  const [showIndex, setShowIndex]= useState(null);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allowedTypes = [
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
  ];
  // console.log("resMenu:",resMenu);

  const Category = resMenu.filter((c) =>
    allowedTypes.includes(c.card?.card?.["@type"])
  );


  return (
    <div className="restaurant-body">
      <div className="tracer">
        <span>
          <Link to="/">Home &nbsp;/&nbsp; </Link>
        </span>
        {resInfo?.city} &nbsp; / &nbsp;{" "}
        <span style={{ color: "#35383D" }}>{resInfo?.name}</span>
      </div>
      <div className="res-info">
        <div className="res-name">
          <h1>{resInfo?.name}</h1>
        </div>
        <div className="res-details-card">
          <div className=" flx">
            <div className="strCrcl">
              <div>★</div>
            </div>
            <div className="dgntext rting-pft">
              {resInfo?.avgRating} ({resInfo?.totalRatingsString}){" "}
              <span>•</span> {resInfo?.costForTwoMessage}
            </div>
          </div>
          <div className="dgntext cuisines">
            {resInfo?.cuisines?.length < 2
              ? resInfo?.cuisines
              : resInfo?.cuisines?.join(", ")}
          </div>
          <div className="flx">
            <div className="">
              <div className="dsgncrcl"></div>
              <div className="dsgnline"></div>
              <div className="dsgncrcl"></div>
            </div>
            <div className="pstntxt">
              <div className="pstnAdrs dgntext">{resInfo?.areaName}</div>
              <div className="pstnDt dgntext">
                {resInfo?.sla?.minDeliveryTime}-{resInfo?.sla?.maxDeliveryTime}{" "}
                mins
              </div>
            </div>
          </div>
        </div>
        <div className="menu">MENU</div>
        <div className="search-food">
          <input
            type="text"
            placeholder="Search For Dishes"
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
        <div className="veg">
          <div className="veg-btn"></div>
        </div>
        <div className="w-full border-gray-200 border-t-2">
          {Category.map((cat,index) =>{
              const key=cat.card.card.categoryId;
            return(
            cat.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
              <div
                key={cat?.card?.card?.categoryId}
                className="border-gray-200 border-b-20 px-2"
              >
                <RestaurantCategory data={cat} showItem={key===showIndex?true:false} onChange={()=>{setShowIndex(key===showIndex?null:key)}} />
              </div>
            ) : (
              <div key={cat?.card?.card?.categoryId} className="border-gray-200 border-b-20">
              <NestedItemCategory
                nestedData={cat} 
                showIndex={showIndex}
                setShowIndex={setShowIndex}
              />
              </div>
            )
          )})}

        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
