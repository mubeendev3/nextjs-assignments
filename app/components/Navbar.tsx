"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="wrapper flex backdrop-blur-sm bg-customBlue h-[80px] items-center w-full justify-between font-semibold text-white shadow-xl">
        <div className="pl-10 tracking-wider text-2xl font-normal">
          <span className="text-yellow-500 font-black">Mubeen</span> Assignments
        </div>
        <div>
          <ul className="flex gap-10 pr-20">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/assignment-1">Assignment 1</Link>
            </li>
            <li
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className="relative"
            >
              <a className="cursor-pointer">Assignment 2 &#9662;</a>
              {showDropdown && (
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 py-1 w-28 px-2 text-black">
                  <li>
                    <Link href="/assignment-2/button">Button</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/accord">Accord</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/alert">Alert</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/calendar">Calendar</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/carousel">Carousel</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/drawer">Drawer</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/slider">Slider</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/toast">Toast</Link>
                  </li>
                  <li>
                    <Link href="/assignment-2/calendar">Calendar</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/assignment-3">Assignment 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
