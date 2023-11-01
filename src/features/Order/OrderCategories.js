import React from "react";
import { useSearchParams } from "react-router-dom";

const OrderCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClickCategory = (value) => {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };
  const categories = [
    {
      value: "appetizer",
      label: "Appetizer",
      image: "assets/appetizer.jpg",
    },
    {
      value: "main-course",
      label: "Main Course",
      image: "assets/maincourse.jpg",
    },
    {
      value: "desserts",
      label: "Desserts",
      image: "assets/lemoncake.jpg",
    },
    { value: "drinks", label: "Drinks", image: "assets/drinks.jpg" },
  ];

  return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 max-w-5xl mx-auto mt-4 h-[90%] w-full font-primary">
      {categories.map((category) => (
        <button
          value={category.value}
          key={category.value}
          onClick={() => handleClickCategory(category.value)}
          style={{
            backgroundImage: `url('${category.image}')`,
          }}
          className={`group rounded-xl shadow-sm hover:shadow-lg  bg-yellow-800/20 transition-all duration-150  text-white font-medium text-xl flex items-center justify-center bg-cover bg-center hue-rotate-15 bg-blend-overlay `}
        >
          <p className="text-6xl  px-4 py-1  group-hover:border-b-4 transition-all duration-400">
            {category.label}
          </p>
        </button>
      ))}
    </div>
  );
};

export default OrderCategories;
