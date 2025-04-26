
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const NestedItemCategory = ({ nestedData, showIndex, setShowIndex }) => {
  const itemCategory = nestedData?.card?.card?.categories;
 
  

  return (
    <div className="mt-2">
      <span className="font-bold text-xl px-2">{nestedData?.card?.card?.title}</span>
      <span>{itemCategory.map((itm,index)=>{
        const lastIndex=index===itemCategory?.length-1;
        const key=itm?.categoryId;
        return(
        <div key={itm.categoryId} className={`${!lastIndex ? "border-b-2 border-gray-200":""} px-2`}>
        <RestaurantCategory  customStyle={true} data={itm} showItem={key===showIndex?true:false } onChange={()=>{setShowIndex(key===showIndex?null:key)}}  />
        </div>
      )})}</span>
    </div>
  );
};

export default NestedItemCategory;
