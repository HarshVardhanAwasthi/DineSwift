import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/common";
import { useState } from "react";
import {clearCart} from "../slices/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  let total = cartItems.reduce(
    (sum, item) => sum + (item?.card?.info?.price || item?.card?.info?.defaultPrice),
    0
  );

  const dispatch=useDispatch()

  const handleClick=()=>{
    window.alert("Order has been Placed!!")
    console.log("clicked")
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-200 p-5 ">
        <div className="w-[50%] bg-white m-auto shadow-2xl rounded-4xl ">
          <div className="border-b-2 border-gray-200 rounded-4xl bg-white p-5 ">
            <h1 className="text-center text-3xl font-bold">Cart Is Empty Add items</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 p-5 ">
      <div className="w-[50%] bg-white m-auto shadow-2xl rounded-4xl ">
        <div className="border-b-2 border-gray-200 rounded-4xl bg-white p-5 ">
          <h1 className="text-center text-3xl font-bold">Cart</h1>
        </div>
        <div>
          {cartItems.map((itm, index) => {
            const id = itm?.card?.info?.id;
            return (
              <div
                className="m-4 flex justify-around p-5 align-middle items-center"
                key={index}
              >
                <div className="w-[10%] ">
                  <img
                    src={IMG_URL + itm?.card?.info?.imageId}
                    className="rounded-4xl border-2 border-gray-200"
                  />
                </div>
                <div className="w-[30%] max-w-[30%] word-break">
                  {itm?.card?.info?.name}
                </div>
                <div className="flex justify-between px-2 border-1 border-gray-400 w-20 h-8 self-center">
                  <div className="font-bold text-gray-400">–</div>{" "}
                  <div className="text-green-300 font-bold">1</div>{" "}
                  <div className="font-extrabold text-green-300">+</div>{" "}
                </div>
                <div>
                  ₹
                  {itm?.card?.info?.price / 100 ||
                    itm?.card?.info?.defaultPrice / 100}
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-2 border-gray-200  m-5 p-5">
          <div className="font-bold px-5">Bill details</div>
          <div className="  flex justify-between p-2 px-5.5">
            <div>Item Total</div>
            <div>₹{total / 100}</div>
          </div>
          <div className="  flex justify-between p-2 px-5.5">
            <div>GST & Other Charges</div>
            <div>₹78.35</div>
          </div>
        </div>
        <div className="border-t-3 border-black  m-5 p-5">
          <div className="  flex justify-between p-2 px-5.5">
            <div className="font-bold">TO PAY</div>
            <div className="font-bold">₹{total / 100 + 78.35}</div>
          </div>
        </div>
      </div>
        <button className="w-[50%] mx-[25%] bg-green-400 text-xl font-bold rounded-4xl  cursor-pointer" onClick={handleClick}>
          CONTINUE TO PAY
        </button>
    </div>
  );
};

export default Cart;
