import React from "react";
import Logo from "./img/logo.png";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";

const Navbar = ({ handleScroll, setSearchTerm, isScrolled, handlePanel, totalItems, wishlist }) => {
  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? "shadow-lg" : ""}`}>

      <nav className="max-w-[1300px] px-4 sm:px-6 lg:px-12 mx-auto h-[80px] sm:h-[90px] lg:h-[14vh] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex w-11 h-11 sm:w-14 sm:h-14 bg-zinc-100 rounded-full p-2">
          <img src={Logo} className="w-full h-full object-contain" alt="Logo"/>
        </a>

        {/* Nav Actions */}
        <div className="flex items-center gap-x-3 sm:gap-x-5">
          {/* Search Bar */}
          <div className="flex p-1 rounded-full border-2 border-blue-600 w-[150px] sm:w-[220px] md:w-[280px] lg:w-auto">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              autoComplete="off"
              className="h-10 sm:h-[5vh] pl-3 sm:pl-4 bg-transparent flex-1 focus:outline-none min-w-0 w-full"
              onFocus={handleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="flex-shrink-0 flex justify-center items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white text-xl">
              <IoSearch />
            </button>
          </div>

          {/* Icons */}
          <button
            className="text-[1.4rem] sm:text-[1.7rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("wishlist")}>
            <GoHeartFill />
          {
            wishlist.length > 0 &&
              <span className="flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-3 border-2 border-white">
              {wishlist.length}
            </span>
          }
          </button>
          <button
            className="text-[1.7rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("cart")}
          >
            <HiShoppingBag />
            {totalItems > 0 && (
              <span className="flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
