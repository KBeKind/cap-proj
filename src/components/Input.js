import React from "react";

const Input = ({ type, label, error, children }) => {
  return (
    <div className="flex flex-col items-start gap-1 mb-3">
      <label htmlFor={type} className="text-md font-medium">
        {label}{" "}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm ">{error}</p>}
    </div>
  );
};

export default Input;
