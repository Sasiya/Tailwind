/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
import React, { useEffect } from "react";

const NavBar = (onClick) => {
  useEffect(() => {}, []);
  console.log("ss");
  const handleClick = (e) => console.log("Free pizza!");
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-background2 p-6 pl-16 ">
        <a href="#responsive-header">
          <img className="h-4 w-50" src="/images/mainLogo1.png" />
        </a>

        <div className="text-sm lg:flex lg:justify-between content-end self-end lg:w-2/3 hidden lg:block">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-background4 text-background3  uppercase font-Proxima Nova"
          >
            Dashboard
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  uppercase hover:text-background4 text-background3"
          >
            Orders
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  uppercase hover:text-background4 text-background3"
          >
            Materials
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  uppercase hover:text-background4 text-background3"
          >
            Product
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  uppercase hover:text-background4 text-background3"
          >
            Customers
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  uppercase hover:text-background4 text-background3"
          >
            Marketing
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  uppercase hover:text-background4 text-background3"
          >
            Logistics
          </a>
        </div>
      </nav>
      <div className="lg:hidden">
        <ul className="">
          <li className="active">
            <a
              href="#responsive-header"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#responsive-header"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#responsive-header"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#responsive-header"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
