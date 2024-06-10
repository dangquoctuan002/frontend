import React, { useState } from "react";

import Sidebar from "./Sidebar";
import { MdMenu } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import Cart from "../cart/Cart"

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeAllToggles = () => {
    setIsSidebarOpen(false);
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
  };

  const toggleSidebar = () => {
    closeAllToggles();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    closeAllToggles();
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleUserMenu = () => {
    closeAllToggles();
    setIsUserMenuOpen(!isUserMenuOpen);
  };


  //   const handleOutsideClick = (event) => {
  //     if (!event.target.closest(".header-item")) {
  //       closeAllToggles();
  //     }
  //   };

  return (
    <header
      className="fixed top-0 w-screen bg-gray-200 text-black py-4 z-50"
      //   onClick={handleOutsideClick}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Sidebar toggle button */}
          <button
            // onClick={toggleSidebar}
            // onClick={() => {
            //   setIsSidebarOpen(true);
            // }}
            onClick={() => {
              setIsSidebarOpen(true);
            }}
            className="header-item focus:outline-none"
          >
            <MdMenu />
          </button>
          {/* Logo and shop name */}
        </div>

        <div className="flex items-center">
          <a href="/" className="text-lg font-bold flex items-center space-x-2">
            <MdDashboard />
            E-Shop
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search button */}
          <div className="relative">
            <button
              onClick={toggleSearch}
              className="header-item focus:outline-none"
            >
              <HiSearch />
            </button>
            {/* Search bar */}
            {isSearchOpen && (
              <form className="min-w-80 mx-auto absolute top-12 right-8 bg-white rounded-lg shadow-md z-[99999]">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <HiSearch />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-700 dark:hover:bg-gray-900 dark:focus:ring-gray-950"
                  >
                    Search
                  </button>
                </div>
              </form>
            )}
          </div>
          {/* User menu button */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="header-item focus:outline-none"
            >
              <FaUser />
            </button>
            {/* User menu items */}
            {isUserMenuOpen && (
              <>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-screen h-screen fixed top-[60px] left-0 z-[99999]"
                ></div>
                <div className="absolute w-40 h-36 top-0 -right-6 z-2 bg-white border border-gray-400 mt-12 mr-4 rounded-lg shadow-md z-[99999]">
                  {/* User menu items */}
                  <ul>
                    <li className="py-3 px-6 hover:bg-gray-400 hover:text-white rounded-lg  cursor-pointer ">
                      Profile
                    </li>
                    <li className="py-3 px-6 hover:bg-gray-400 hover:text-white rounded-lg  cursor-pointer ">
                      Settings
                    </li>
                    <li className="py-3 px-6 hover:bg-gray-400 hover:text-white rounded-lg  cursor-pointer ">
                      Logout
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          {/* Cart button */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCartOpen(true);
                closeAllToggles();
              }}

              className="header-item focus:outline-none"
            >
              <PiShoppingCartFill />
            </button>
            <div className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full h-3 w-3 flex items-center justify-center">
              3
            </div>
            {/* Cart details */}
            
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <Sidebar showModel={setIsSidebarOpen} model={isSidebarOpen} />
      )}
      {isCartOpen && (
        <Cart showModel={setIsCartOpen} model={isCartOpen} />
      )}
    </header>
  );
};

export default Header;
