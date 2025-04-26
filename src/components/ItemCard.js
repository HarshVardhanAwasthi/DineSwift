import { IMG_URL } from "../utils/common";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { decrement, increment } from "../slices/countIndiItem";

const ItemCard = ({ itemData, isLast }) => {
  const [isClicked, setIsClicked] = useState(false);

  const  count=useSelector((store)=>store.countIndiItem.value)
  

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(itemData));
    setIsClicked(true);
  };

  const plusClick = () => {
    dispatch(increment());
    dispatch(addItem(itemData));
  };

  const minusClick = () => {
    dispatch(decrement())
    dispatch(removeItem(itemData));
    if(count===1){
      setIsClicked(false)
      dispatch(decrement())
    }
  };

  const { name, ratings, defaultPrice, description, imageId, price } =
    itemData?.card?.info;
  const { rating, ratingCount } = ratings?.aggregatedRating;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`w-full menu-item-card ${
        isLast ? "" : "border-b-2 border-gray-200"
      } `}
    >
      <div className="spwdth">
        <div className="item-details">
          <div className="dgntext itmName">{name}</div>
          <div className="dgntext itmCost">
            &#8377; {defaultPrice / 100 || price / 100}{" "}
          </div>
        </div>
        <div className="item-rating  dgntext">★ {rating}</div>
        <div className="item-offer">
          <p className={isExpanded ? "" : "truncated-text"}>{description} </p>
          <span
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? " " : "more"}
          </span>
        </div>
      </div>
      <div className="item-img">
        <img src={IMG_URL + imageId} />
        <div
          className={`relative cursor-pointer rounded  border border-black text-green-400 bg-white shadow-2xl bottom-4 left-10.5 font-bold w-20 ${isClicked?"px-2":"px-5.5"} `}
        >
          {isClicked ? (
            <div className="flex justify-between">
              <div onClick={minusClick}>-</div>
              <div>{count}</div>
              <div onClick={plusClick}>+</div>
            </div>
          ) : (
            <div onClick={handleClick} className="text-center">
              ADD
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
