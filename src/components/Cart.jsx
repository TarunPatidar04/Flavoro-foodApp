import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
const Cart = () => {
  const [activeCart, setactiveCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQuantity = cartItems.reduce(
    (totalQty, item) => totalQty + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full  lg:w-[20vw] h-full bg-white  p-5 mb-3  ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className={`flex justify-between items-center my-3`}>
          <span className="text-xl font-bold text-gray-800">My Order</span>

          <IoMdClose
            onClick={() => {
              setactiveCart(!activeCart);
            }}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
            // onClick={() => {
            //   setactiveCart((prev) => !prev);
            // }}
          />
        </div>

        <div>
          {cartItems.length > 0 ? (
            cartItems.map((food) => {
              return (
                <ItemCard
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  image={food.image}
                  quantity={food.quantity}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl font-bold text-gray-800">
              Your Card is Empty
            </h2>
          )}
        </div>

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">
            Items :{totalQuantity}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2 " />
          <button className="bg-green-500 font-bold px-3 py-2 rounded-lg text-white w-[90vw] lg:w-[18vw]  mb-5">
            Check Out
          </button>
        </div>
      </div>
      <div className="border border-black shadow-lg">
        <FaShoppingCart
          className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
            totalQuantity > 0 && "animate-bounce delay-500 transition-all"
          }  `}
          onClick={() => {
            setactiveCart(!activeCart);
          }}
        />
      </div>
    </>
  );
};

export default Cart;
