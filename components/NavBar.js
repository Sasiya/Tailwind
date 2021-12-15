/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";

const NavBar = (onClick) => {
  useEffect(() => {}, []);
  const [menu, setMenu] = useState(true);
  console.log("ss", menu);
  const handleClick = (e) => setMenu(!menu);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-background2 px-14 py-6 pl-16 sticky">
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
        <button className="lg:hidden" onClick={() => handleClick()}>
          <img className="h-8 w-8" src="/images/menu.png" />
        </button>
      </nav>
      {menu && (
        <div
          className={`lg:hidden justify-items-center bg-red-100 ${
            menu ? "mt-0 " : "-mt-60"
          } `}
        >
          <ul>
            <li>
              <a
                href="#responsive-header"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 text-center text-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#responsive-header"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 text-center text-lg"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#responsive-header"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 text-center text-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#responsive-header"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 text-center text-lg"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
