import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const OrderCard = () => {
  const [quantity, setQuantity] = useState(1);
  const minusQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className="grid grid-cols-3 w-full mt-2 gap-4 shadow-md p-4 pb-6 rounded-md">
      <div className="col-span-2 w-full ">
        <h3 className="font-medium  text-2xl font-primary">Bruschetta</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          perferendis a similique corrupti quas veniam accusamus, dolor sit
          repellat facere provident, blanditiis voluptates? Maiores voluptates
          vel beatae cupiditate inventore placeat.
        </p>

        <div className="flex md:flex-row flex-col md:gap-20 mt-8">
          <p className="ml-2 font-semibold text-orange-400">$4.99</p>
          <div className="md:space-x-6">
            <button className="font-bold" onClick={minusQuantity}>
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button className="font-bold" onClick={addQuantity}>
              +
            </button>
          </div>
          <button className="hover:border-b-4 hover:border-yellow-400 transition-all duration-200 font-semibold">
            Add to Basket
          </button>
        </div>
      </div>
      <div className="col-span-1 relative">
        <img
          src="/assets/bruschetta.d54e450bda5efcf06010.jpg"
          alt="bruschetta"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button className="h-12 w-12 rounded-full bg-yellow-400 absolute -bottom-3 -right-1 text-green-900  font-semibold flex items-center justify-center hover:scale-105 hover:bg-yellow-500 transition-all duration-200">
          <AiOutlinePlus size={25} />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
