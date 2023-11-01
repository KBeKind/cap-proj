import React from "react";
import Button from "./Button";

export const HeroSection = () => {
  return (
    <section className="bg-[#495e57]">
      <div className="flex flex-col p-6 max-w-5xl mx-auto gap-8 md:flex-row pt-10 justify-center md:h-96 lg:mt-0 ">
        <div className="md:w-1/2">
          <h1 className="font-semibold text-[#f4ce14] text-6xl font-primary tracking-wide">
            Little Lemon
          </h1>
          <h2 className="text-white text-4xl mt-2 font-primary tracking-wide">
            Chicago
          </h2>
          <p className="mt-4 mb-10 md:mb-14 text-white font-secondary">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button message="Reserve a Table" to="booking" />
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/restauranfood.jpg"
            alt="restaurant food"
            className="object-cover h-[400px] w-full rounded-lg mt-12 md:mt-0 z-[-10] "
          />
        </div>
      </div>
    </section>
  );
};
