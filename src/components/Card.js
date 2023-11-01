import React from "react";
import { MdDeliveryDining } from "react-icons/md";

const Card = ({ name, price, image }) => {
  return (
    <article className="shadow-lg bg-[#edefee] rounded-lg md:hover:scale-110 transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="object-cover w-96 h-52 rounded-md"
      />
      <div className="px-4 pt-6 pb-10">
        <div className="flex justify-between items-center mb-4 text-lg font-semibold">
          <h3 className="text-slate-600 font-primary text-2xl">{name}</h3>
          <h3 className="text-orange-400">${price}</h3>
        </div>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio fuga
          ratione rem minima fugit ipsum voluptas sapiente sunt maiores vel.
        </p>
        <button className="font-bold flex items-center gap-4 hover:border-b border-b-amber-400 h-8 transition-all duration-300">
          Order a delivery <MdDeliveryDining size={20} />
        </button>
      </div>
    </article>
  );
};

export default Card;
