import { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data, customStyle,showItem, onChange }) => {
//   const [showItem, setShowItem] = useState(false);

const handleClick = () => {
   onChange();
  };
  

  const ItemData = data?.card?.card?.itemCards || data?.itemCards;

  // console.log(data);

  return (
    <div className=" ">
      <div
        className=" flex justify-between my-3  rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <span
          className={`${customStyle ? "restCategory" : "font-bold text-xl"}`}
        >
          {data?.card?.card?.title || data.title} (
          {data?.card?.card?.itemCards?.length || data.itemCards.length})
        </span>
        <span className="">⬇️</span>
      </div>
      <div className="">
        {ItemData.map(
          (itm, index) =>
            showItem && (
              <ItemCard
                key={itm?.card?.info?.id}
                itemData={itm}
                isLast={index === ItemData.length - 1}
              />
            )
            
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
