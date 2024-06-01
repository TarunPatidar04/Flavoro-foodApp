import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";

const CategoryMenu = () => {
  const [Category, setCategory] = useState([]);

  const listUniqueCategory = () => {
    const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    console.log(uniqueCategory);
    setCategory(uniqueCategory);
  };
  useEffect(() => {
    listUniqueCategory();
  }, []);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best Food</h3>
      <div className="my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {Category.map((category) => (
          <button
            className="px-3 py-2 bg-gray-200 font-bold
        rounded-lg hover:bg-green-600 hover:text-white cursor-pointer"
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
