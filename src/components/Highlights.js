import React from "react";
import Button from "./Button";
import Card from "./Card";

const specialsArr = [
  {
    name: "Greek Salad",
    price: 12.99,
    image: "/assets/greek salad.jpg",
  },
  {
    name: "Bruschetta",
    price: 5.99,
    image: "assets/bruschetta.d54e450bda5efcf06010.jpg",
  },
  {
    name: "Lemon Dessert",
    price: 4.99,
    image: "/assets/lemon dessert.jpg",
  },
];

const Highlights = () => {
  return (
    <section className=" grid grid-flow-row  auto-rows-auto max-w-5xl mx-auto md:mt-20 lg:mt-32 gap-8 p-6 mt-4 mb-10">
      <div className="flex justify-between 1 items-center">
        <h2 className="text-4xl text-slate-800 font-medium font-primary tracking-normal">
          Specials
        </h2>
        <Button message="Online Menu" to="order" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialsArr.map((item) => (
          <li key={item.name}>
            <Card name={item.name} price={item.price} image={item.image} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Highlights;
