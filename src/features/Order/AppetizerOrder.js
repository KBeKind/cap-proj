import React from "react";
import OrderCard from "./OrderCard";

const AppetizerOrder = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl tracking-wide font-medium p-2 font-primary">
        Appetizers
      </h2>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default AppetizerOrder;
