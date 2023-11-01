import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLinkFn from "./NavLinkFn";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex lg:justify-center justify-between gap-24 items-center text-green-900 py-2 lg:py-0 md:px-6 fixed bg-white z-50 h-[105px] w-full mx-40 shadow-md">
      <NavLink to="/" className="">
        <img
          src="/assets/little lemon logo_nav.png"
          alt="little lemon logo"
          className="w-[280px] py-3 md:px-0 px-5"
        />
      </NavLink>
      <ul className="lg:flex hidden ">
        {/* NavLink Component */}
        <NavLinkFn location="/" label="Home" type="horizontal" />
        <NavLinkFn location="about" label="About" type="horizontal" />
        <NavLinkFn location="menu" label="Menu" type="horizontal" />
        <NavLinkFn location="booking" label="Reservations" type="horizontal" />
        <NavLinkFn location="order" label="Order Online" type="horizontal" />
        <NavLinkFn location="login" label="Login" type="horizontal" />
      </ul>

      <div
        className="lg:hidden mr-8 cursor-pointer"
        onClick={() => setShowNav((prev) => !prev)}
      >
        {!showNav ? (
          <AiOutlineMenu size={35} className="text-green-900" />
        ) : (
          <AiOutlineClose size={35} className="text-green-900" />
        )}
      </div>

      <div
        className={`fixed lg:hidden bg-white w-[70%] border-r pr-4 transition-all ease-in-out duration-500 z-20 shadow-xl ${
          showNav ? "inset-0" : "inset-0 left-[-100%]"
        }`}
      >
        <img
          src="/assets/little lemon logo_nav.png"
          alt="little lemon logo"
          className="w-[280px] py-3 lg:px-0 px-5 mt-4 "
        />
        <ul className="flex flex-col m-4">
          <NavLinkFn
            location="/"
            label="Home"
            type="vertical"
            onClick={() => setShowNav((prev) => !prev)}
          />
          <NavLinkFn
            location="about"
            label="About"
            type="vertical"
            onClick={() => setShowNav((prev) => !prev)}
          />
          <NavLinkFn
            location="menu"
            label="Menu"
            type="vertical"
            onClick={() => setShowNav((prev) => !prev)}
          />
          <NavLinkFn
            location="booking"
            label="Reservations"
            type="vertical"
            onClick={() => setShowNav((prev) => !prev)}
          />
          <NavLinkFn
            location="order"
            label="Order Online"
            type="vertical"
            onClick={() => setShowNav((prev) => !prev)}
          />
          <NavLinkFn
            location="login"
            label="Login"
            type="vertical"
            onClick={() => setShowNav((prev) => !prev)}
          />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
