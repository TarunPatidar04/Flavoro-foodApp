import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  DecrementQty,
  IncrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
const ItemCard = ({ id, name, price, quantity, rating, image }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 ">
        <MdDelete
          className="absolute  right-7 text-gray-600 cursor-pointer"
          onClick={() => {
            dispatch(removeFromCart({ id, name, price, quantity, image }));
           toast.success("Remove Item")
          }}
        />
        <div>
          <img
            src={image}
            alt="image"
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
        <div className="leading-6">
          <h2 className="font-bold text-gray-800y">{name}</h2>
          <div className="flex justify-between">
            <span className="text-green-500 font-bold">₹{price}</span>
            <div className="flex justify-center items-center gap-1 absolute right-7">
              <AiOutlineMinus
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-200 ease-linear cursor-pointer"
                onClick={() => {
                  dispatch(DecrementQty({ id }));
                }}
              />
              <span>{quantity}</span>
              <AiOutlinePlus
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-200 ease-linear cursor-pointer"
                onClick={() => {
                  dispatch(IncrementQty({ id }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
