import React from "react";
import { useSearchParams } from "react-router-dom";
import OrderCategories from "../features/Order/OrderCategories";
import AppetizerOrder from "../features/Order/AppetizerOrder";
import MainCourseOrder from "../features/Order/MainCourseOrder";
import DessertOrder from "../features/Order/DessertOrder";
import DrinksOrder from "../features/Order/DrinksOrder";
import BackButton from "../components/BackButton";

const Order = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  let display;
  if (selectedCategory === null) display = <OrderCategories />;
  if (selectedCategory === "appetizer") display = <AppetizerOrder />;
  if (selectedCategory === "main-course") display = <MainCourseOrder />;
  if (selectedCategory === "desserts") display = <DessertOrder />;
  if (selectedCategory === "drinks") display = <DrinksOrder />;

  return (
    <div className="h-[82vh] p-4  no-scrollbar overflow-y-auto font-secondary">
      <div className="max-w-5xl mx-auto mt-4">
        {selectedCategory === null ? (
          <input
            type="text"
            placeholder="Search food ..."
            className="border-2 border-slate-300 rounded-3xl focus:outline-amber-400 w-full py-2 px-4"
          />
        ) : (
          <BackButton />
        )}
      </div>
      {display}
    </div>
  );
};

export default Order;
