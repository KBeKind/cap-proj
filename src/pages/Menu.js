import React from "react";

import NavMenu from "../components/Menu/NavMenu";
import { Outlet } from "react-router-dom";
import PageUnderConstruction from "./PageUnderConstruction";

const Menu = () => {
  return (
    <div className="space-y-8 h-[82vh]">
      <div className="bg-[#495e57]">
        <h2 className="text-4xl tracking-wide font-semibold text-center py-8 text-white font-primary">
          Our Menu
        </h2>
      </div>
      <div className="max-w-5xl mx-auto font-secondary">
        <NavMenu />
        <Outlet />
        <PageUnderConstruction />
      </div>
    </div>
  );
};

export default Menu;
