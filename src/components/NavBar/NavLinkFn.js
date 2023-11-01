import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkFn = ({ location, label, type, onClick }) => {
  const style =
    type === "horizontal"
      ? "px-5 py-10 hover:bg-yellow-400 transition-all duration-200"
      : "py-4 px-4 border-b border-gray-500/50 hover:bg-yellow-400";

  return (
    <NavLink to={location} className={style} onClick={onClick}>
      {label}
    </NavLink>
  );
};

export default NavLinkFn;
