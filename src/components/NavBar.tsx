"use client";

import Link from "next/link";
import { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const linkclass =
    "text-[#F2F3F4] font-medium cursor-pointer transition ease-in-out delay-200 hover:text-[#854CE6] active: decoration-solid";

  const mobileLink = "text-[#F2F3F4] font-medium cursor-pointer transition ease-in-out delay-200 hover:text-[#854CE6] active: decoration-solid active: border-[#854CE6]";

  return (
    <nav className="bg-[#191924] flex justify-center items-center h-20 text-base sticky top-0 transition-all ease-in-out duration-700 md:transition-none md:duration-0 z-10">
      <div className="flex justify-between items-center h-[60px] z-[1] w-full py-0 px-6 max-w-6xl">
        <a className="flex items-center justify-start text-white mb-5 cursor-pointer mt-0 pt-0 z-10 max-sm: py-0 max-sm:px-0">
          <DiCssdeck size="3rem" />
          <span className=" px-0 py-1 font-bold text-lg">Portfolio</span>
        </a>

        <div className=" md:hidden block absolute top-0 right-0 transform -translate-x-full translate-y-2/3 text-2xl cursor-pointer">
          <FaBars onClick={clickHandler} />
        </div>

        <ul className="w-full md:flex items-center justify-center gap-8 px-0 py-1.5 hidden">
          <li>
            <Link className={linkclass} href="#">
              About
            </Link>
          </li>
          <li>
            <Link className={linkclass} href="#">
              Skills{" "}
            </Link>
          </li>
          <li>
            <Link className={linkclass} href="#">
              Projects
            </Link>
          </li>
          <li>
            <Link className={linkclass} href="#">
              Education
            </Link>
          </li>
        </ul>
        {/* {const classes = "border-solid border-[#854CE6] flex justify-center h-7/10 rounded-2xl text-base"} */}
        <div className=" w-4/5 h-full md:flex justify-end items-center py-0 px-1.5 hidden">
          <a
            target="_blank"
            className="flex justify-center items-center h-2/3 font-medium text-base py-0 px-5 rounded-full border-4 border-[#854CE6] text-[#854CE6]"
          >
            GitHub Profile
          </a>
        </div>
        {isOpen && (
          <>
            <ul
              className={
                "flex flex-col justify-center gap-4 absolute top-20 right-0 w-full pt-3 pr-10 pb-6 pl-10 transition-all ease-in-out duration-700 rounded-b-2xl bg-opacity-80 bg-[#191924] opacity-80" +
                (isOpen
                  ? "transform translate-y-0 "
                  : "transform -translate-y-full ") +
                (
                  isOpen ? "opacity-100 " : "opacity-0 "
                ) + 
                (
                  isOpen ? "z-50" : "-z-50"
                )
              }
            >
              <li>
                <Link className={mobileLink} href="#" onClick={clickHandler}>
                  About
                </Link>
              </li>
              <li>
                <Link className={mobileLink} href="#" onClick={clickHandler}>
                  Skills{" "}
                </Link>
              </li>
              <li>
                <Link className={mobileLink} href="#" onClick={clickHandler}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className={mobileLink} href="#" onClick={clickHandler}>
                  Education
                </Link>
              </li>
              <li>
                <a
                  className="flex justify-center items-center h-2/3 font-medium text-base py-2.5 px-4 rounded-full bg-[#854CE6] text-white w-max"
                  target="_blank"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
            {/* {const classes = "border-solid border-[#854CE6] flex justify-center h-7/10 rounded-2xl text-base"} */}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
