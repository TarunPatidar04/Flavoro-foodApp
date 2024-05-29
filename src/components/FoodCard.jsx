import React from "react";

const FoodCard = () => {
  return (
    <div className="font-bold w-[250px] bg-white ">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
      />
      <div>
        <h2>Onion Pizza</h2>
        <span>180</span>
      </div>
    </div>
  );
};

export default FoodCard;
