import React from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#495e57] mt-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-6 grid-cols-1 py-8 p-8 lg:p-0 lg:py-8 text-white justify-items-start gap-6 font-secondary">
        <div className="md:col-span-1">
          <img
            src="/assets/logo-white.png"
            alt="logo-white"
            className="w-20 md:w-[60%] mt-2"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="uppercase text-lg font-semibold mb-4">SiteMap</h4>
          <ul className="flex flex-col gap-1">
            <NavLink
              to="/"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Home
            </NavLink>

            <NavLink
              to="about"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              About
            </NavLink>

            <NavLink
              to="menu"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Menu
            </NavLink>

            <NavLink
              to="booking"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Reservations
            </NavLink>

            <NavLink
              to="orderOnline"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Order Online
            </NavLink>

            <NavLink
              to="login"
              className="hover:text-yellow-400 transition-all duration-200"
            >
              Login
            </NavLink>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="uppercase text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <span>
                <FaMapMarkerAlt />
              </span>
              <p className="italic">
                2704 University Drive, Chicago, IL,60606{" "}
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span>
                <FaPhoneAlt />
              </span>
              <p className="italic">618-945-4691 </p>
            </li>
            <li className="flex items-center gap-4">
              <span>
                <FaEnvelope />
              </span>
              <p className="italic">littlelemon@food.com </p>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="uppercase text-lg font-semibold mb-4">
            Connect With Us
          </h4>
          <div className="flex gap-5">
            <a href="https://facebook.com">
              <FaFacebook
                size={20}
                className="hover:text-yellow-500  transition-colors duration-200"
              />
            </a>
            <a href="https://twitter.com">
              <FaTwitter
                size={20}
                className="hover:text-yellow-500  transition-colors duration-200"
              />
            </a>
            <a href="https://instagram.com">
              <FaInstagram
                size={20}
                className="hover:text-yellow-500  transition-colors duration-200"
              />
            </a>
            <a href="https://youtube.com">
              <FaYoutube
                size={20}
                className="hover:text-yellow-500  transition-colors duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
