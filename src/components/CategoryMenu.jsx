import React from "react";

const CategoryMenu = () => {
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best Food</h3>
      <div className="my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          className="px-3 py-2 bg-gray-200 font-bold
        rounded-lg hover:bg-green-600 hover:text-white cursor-pointer"
        >
          All
        </button>
        <button
          className="px-3 py-2 bg-gray-200 font-bold
        rounded-lg hover:bg-green-600 hover:text-white cursor-pointer"
        >
          Lunch
        </button>
        <button
          className="px-3 py-2 bg-gray-200 font-bold
        rounded-lg hover:bg-green-600 hover:text-white cursor-pointer"
        >
          Breakfast
        </button>
        <button
          className="px-3 py-2 bg-gray-200 font-bold
        rounded-lg hover:bg-green-600 hover:text-white cursor-pointer"
        >
          Dinner
        </button>
        <button
          className="px-3 py-2 bg-gray-200 font-bold
        rounded-lg hover:bg-green-600 hover:text-white cursor-pointer"
        >
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
