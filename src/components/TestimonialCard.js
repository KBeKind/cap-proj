import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const TestimonialCard = ({ name, rating, image }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg flex flex-col justify-center items-center relative overflow-hidden p-4 max-w-5xl">
      <BiSolidQuoteLeft size={40} className="mt-5 bg text-[#495e57]" />
      <div className="text-center mb-8 space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iusto quos eum perspiciatis deleniti nulla nesciunt aliquam quia,
          magnam necessitatibus.
        </p>
        <p className="">{rating}</p>
      </div>
      <img
        src={image}
        alt={name}
        className="rounded-full w-24 h-24 object-cover z-10 outline outline-8 outline-white"
      />
      <h3 className="text-white z-10 mt-4 font-semibold text-lg">{name}</h3>
      <div className="w-[22rem] h-72 bg-gradient-to-r from-orange-300 via-yellow-500 to-amber-500 rounded-full absolute top-[70%] md:top-[75%] z-0" />
    </article>
  );
};

export default TestimonialCard;
