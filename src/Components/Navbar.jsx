import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState('"');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed 
   top-0 z-20  bg-primary `}
      >
        <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex items-center gap-2 ">
              <img
                className="w-32 h-32"
                src="./images/favicon.png "
                alt="logo"
              />
              <div className="ml-4  ">
                <p className=" mt-3.5 hover-tran hover-color  hover:text-[#52e5ff] cursor-pointer text-purple-500 anta flex items-center flec-col ">
                  Nikhil Lohra &nbsp;
                </p>{" "}
                <span className="text-sm cursor-pointer hover-tran hover:text-[#52e5ff] text-purple-500 anta flex ">
                  (Web & Software Developer)
                </span>
              </div>
            </div>
          </Link>

          <ul className=" list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-[#e71fb9] text-[20px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className=" sm:hidden flex flex-3 justify-end items-center">
            <img
              src={toggle ? "./images/close1.png" : "./images/menu2.png"}
              alt="menu"
              className="w-[30px]  h-30 object-contain cursor-pointer z-30"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient  
          top-20 right-0 mx-4 my-2 z-10 rounded-xl mt-2 sm:hidden absolute`}
          >
            <ul className="list-none flex anta1  justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }  hover:text-[#45b8cd] text-[19px] font-medium  cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
