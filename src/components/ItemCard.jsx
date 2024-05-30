import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete className="absolute  right-7 text-gray-600 cursor-pointer"/>
        <div>
          <img
            src="https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png"
            alt="image"
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
        <div className="leading-6">
          <h2 className="font-bold text-gray-800y">Onion Pizza</h2>
          <div className="flex justify-between">
            <span className="text-green-500 font-bold">₹120</span>
            <div className="flex justify-center items-center gap-1 absolute right-7">
              <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-200 ease-linear cursor-pointer" />
              <span>1</span>
              <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all duration-200 ease-linear cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
