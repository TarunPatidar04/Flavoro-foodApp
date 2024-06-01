import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
        <div className="">
          <h4 className="text-xl font-bold text-gray-600">
            {new Date().toUTCString().slice(0, 16)}
          </h4>
          <h1 className="text-2xl font-bold">Flavoro Foods</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
