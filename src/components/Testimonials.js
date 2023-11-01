import React from "react";
import TestimonialCard from "./TestimonialCard";

const peopleArr = [
  {
    name: "Park Chaeyoung",
    rating: "⭐⭐⭐⭐⭐",
    image: "/assets/girl2.jpg",
  },
  {
    name: "Goo Yoo Jung",
    rating: "⭐⭐⭐⭐⭐",
    image: "/assets/girl1.jpg",
  },
  {
    name: "Jung Hae In",
    rating: "⭐⭐⭐⭐⭐",
    image: "/assets/boy1.jpg",
  },
  {
    name: "Kim Jisoo",
    rating: "⭐⭐⭐⭐⭐",
    image: "/assets/girl3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#495e57] p-6">
      <div className="max-w-5xl mx-auto md:space-y-10 space-y-8">
        <h2 className=" text-2xl md:text-4xl text-white font-primary tracking-wide">
          What people say about us!
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {peopleArr.map((item) => (
            <li key={item.name}>
              <TestimonialCard
                name={item.name}
                rating={item.rating}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
