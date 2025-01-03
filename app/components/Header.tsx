"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import cross from "../../public/cross.png";
import search from "../../public/search.png";
import cart from "../../public/cart.png";
import account from "../../public/account.png";
import icon from "../../public/search-2.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCart } from "./CartContext";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const {cartCount} = useCart();
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-full">
      {/* Top Announcement Bar */}
      <div className="flex items-center justify-between w-full px-4 h-12 bg-black">
        <p className="flex-1 text-sm font-normal text-center text-white">
          Sign up and get 20% off your first order.
          <a href="#" className="underline font-medium ml-2 text-white">
            Sign Up Now
          </a>
        </p>
        <div className="hidden md:flex text-white ml-auto pr-36">
          <Image alt="Close" src={cross} width={16} height={16} />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-16 py-5 border-b border-slate-300">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={handleNavToggle}>
              {navOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>

          {/* Logo */}
          <h1 className="text-black font-bold text-2xl">SHOP.CO</h1>
        </div>

        {/* Links for Large Screens */}
        <div className="px-5">
        <ul className="hidden md:flex gap-8 whitespace-nowrap font-normal text-[18px] font-[poppins] text-black">
          <li>
            <Link href="/products">
              Shop <i className="fa-solid fa-angle-down"></i>
            </Link>
          </li>
          <li>
            <Link href="/products">On Sale</Link>
          </li>
          <li>
            <Link href="/products">New Arrivals</Link>
          </li>
          <li>
            <Link href="/products">Brands</Link>
          </li>
        </ul>
        </div>

        {/* Search Bar */}
        <div className="lg:flex sm:hidden  items-center md:w-[577px] md:h-[48px]  bg-[#F5F5F5] rounded-3xl">
          <Image alt="search" src={search} className="h-[24px] w-[24px] ml-4" />
          <input
            type="text"
            className="bg-[#F5F5F5] focus:outline-none text-sm h-[38px] w-[500px] px-2"
            placeholder="Search for products..."
          />
        </div>

        {/* Icons */}
        <div className="flex justify-start space-x-4 ">
          <Image
            alt="search-icon"
            src={icon}
            className="h-[24px] w-[24px] lg:hidden"
          />
          <Link href={"/cart"}>
            <Image alt="cart" src={cart} className="h-[29px] w-[29px]" />
            <span className="absolute top-1 right-3 md:top-20 md:right-[107px] bg-red-600 text-white text-xs rounded-full px-1">
                    {cartCount}
                  </span>
          </Link>
          <Image alt="account" src={account} className="h-[29px] w-[29px]" />
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {navOpen && (
        <div className="fixed top-0 left-0 h-full w-[80%] bg-white shadow-lg z-50 md:hidden">
          <div className="flex justify-end p-4">
            <AiOutlineClose
              size={24}
              className="text-black cursor-pointer"
              onClick={handleNavToggle}
            />
          </div>
          <div className="flex flex-col items-start px-6 space-y-6 text-lg font-[poppins]">
            <Link href="/products" onClick={handleNavToggle}>
              Shop
            </Link>
            <Link href="/products" onClick={handleNavToggle}>
              On Sale
            </Link>
            <Link href="/products" onClick={handleNavToggle}>
              New Arrivals
            </Link>
            <Link href="/products" onClick={handleNavToggle}>
              Brands
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
