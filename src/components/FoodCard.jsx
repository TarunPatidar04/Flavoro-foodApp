import React from "react";
import { AiFillStar } from "react-icons/ai";

const FoodCard = ({ id, name, price, image, desc, rating }) => {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex-col flex rounded-lg gap-3">
      <img
        src={image}
        alt=""
        className="w-auto h-[130px] hover:scale-110 duration-300 cursor-grab transition-all ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0,50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-between items-center ">
          <AiFillStar className="mr-2 text-yellow-400" /> {rating}
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
