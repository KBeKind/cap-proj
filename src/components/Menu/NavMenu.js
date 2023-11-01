import React from "react";
import { Link } from "react-router-dom";
const NavMenu = () => {
  const styles =
    "border-2 border-[#495e57] w-36 rounded-full px-4 py-1 hover:bg-[#495e57] hover:text-white text-center transition-all duration-200";
  return (
    <div className="flex items-center justify-center">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="appetizer" className={styles}>
          Appetizer
        </Link>
        <Link to="main-course" className={styles}>
          Main Course
        </Link>
        <Link to="dessert" className={styles}>
          Dessert
        </Link>
        <Link to="drinks" className={styles}>
          Drinks
        </Link>
      </ul>
    </div>
  );
};

export default NavMenu;
