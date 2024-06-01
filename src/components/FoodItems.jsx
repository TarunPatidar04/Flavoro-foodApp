import React from "react";
import FoodCard from "./FoodCard.jsx";
import FoodData from "./../data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const handleToast = (e) => {
    toast.success("Added to cart : "+e);
  };
  return (
    <>
      <Toaster position="top center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              image={food.img}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
