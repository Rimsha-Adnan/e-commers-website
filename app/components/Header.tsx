"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import cross from "../../public/cross.png";
import search from "../../public/search.png";
import cart from "../../public/cart.png";
import account from "../../public/account.png";
import icon from "../../public/search-2.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useCart } from "./CartContext";
import { urlFor } from "@/sanity/lib/image";
import { FaRegHeart } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type GivingTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
};

function Header() {
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<GivingTypes[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchTerm.trim()) {
        setFilteredProducts([]); // Clear results when search is empty
        return;
      }
      try {
        const res = await fetch(`/api/products?search=${searchTerm}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const { data } = await res.json();
          setFilteredProducts(data); // Update state with API response
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

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
          <div className="flex  lg:hidden">
            <Sheet>
              <SheetTrigger>
                <AiOutlineMenu size={24} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="flex justify-center mt-20 space-y-5">
                  <SheetTitle>
                    Shop
                    <DropdownMenu>
                      <DropdownMenuTrigger className="outline-none">
                        <FaAngleDown className="ml-2" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link
                            href={`/items/category?category=${encodeURIComponent("Hoddie")}`}
                          >
                            Hoddie
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Shirt</DropdownMenuItem>
                        <DropdownMenuItem>T-Shirt</DropdownMenuItem>
                        <DropdownMenuItem>Jeans</DropdownMenuItem>
                        <DropdownMenuItem>Short</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SheetTitle>
                  <SheetTitle>On Sale</SheetTitle>
                  <SheetTitle>New Arrivals</SheetTitle>
                  <SheetTitle>Brands</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <h1 className="text-black font-bold text-2xl">SHOP.CO</h1>
        </div>

        {/* Links for Large Screens */}
        <div className="px-5">
          <ul className="hidden md:flex gap-8 whitespace-nowrap font-normal text-[18px] font-[poppins] text-black">
            <li className="flex justify-center items-center">
              Shop
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none ">
                  <FaAngleDown className="ml-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>T-Shirt</DropdownMenuItem>
                  <DropdownMenuItem>Shirt</DropdownMenuItem>
                  <DropdownMenuItem>Hoddie</DropdownMenuItem>
                  <DropdownMenuItem>Short</DropdownMenuItem>
                  <DropdownMenuItem>Jeans</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
        {/* <div className="lg:flex sm:hidden  items-center w-[577px] h-[48px]  bg-[#F5F5F5] rounded-3xl">
          <Image alt="search" src={search} className="h-[24px] w-[24px] ml-4" />
          <input
            type="text"
            className="bg-[#F5F5F5] focus:outline-none text-sm h-[38px] w-[500px] px-2"
            placeholder="Search for products..."
          />
        </div> */}
        <div className=" relative hidden md:flex items-center md:w-[577px] md:h-[48px] h-auto w-auto bg-[#F5F5F5] rounded-3xl">
          <Image alt="search" src={search} className="h-[24px] w-[24px] ml-4" />
          <input
            type="text"
            className="bg-[#F5F5F5] focus:outline-none text-sm md:h-[38px] h-auto md:w-[500px] w-auto px-2"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredProducts.length > 0 && (
          <div className="absolute top-32 left-[850px] w-[550px]  overflow-y-auto h-[350px] bg-white shadow-lg z-50 rounded-lg">
            <div className="py-2">
              {filteredProducts.map((product, index: number) => (
                <div key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link
                    href={`/products/${product._id}`}
                    className="flex items-center space-x-4"
                  >
                    <Image
                      src={urlFor(product.image).url()}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500 ">
                        {product.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Icons */}
        <div className="flex justify-start space-x-4 ">
          <Image
            alt="search-icon"
            src={icon}
            className="h-[24px] w-[24px] lg:hidden"
          />
          <Link href={"/wishlist"}>
            <FaRegHeart className="h-[28px] w-[28px]" />
          </Link>
          <Link href={"/cart"}>
            <Image alt="cart" src={cart} className="h-[29px] w-[29px]" />
            <span className="absolute top-16 right-16 md:top-20 md:right-[107px] bg-red-600 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          </Link>
          <Image alt="account" src={account} className="h-[29px] w-[29px]" />
        </div>

        <div className="flex mt-10 md:hidden items-center justify-start  h-auto w-auto bg-[#F5F5F5] rounded-3xl">
          <Image alt="search" src={search} className="h-[20px] w-[20px] ml-4" />
          <input
            type="text"
            className="bg-[#F5F5F5] focus:outline-none text-sm h-[38px]  w-full px-2"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredProducts.length > 0 && (
          <div className="absolute top-32 left-[850px] w-[550px]  overflow-y-auto h-[350px] bg-white shadow-lg z-50 rounded-lg">
            <div className="py-2">
              {filteredProducts.map((product, index: number) => (
                <div key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link
                    href={`/products/${product._id}`}
                    className="flex items-center space-x-4"
                  >
                    <Image
                      src={urlFor(product.image).url()}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500 ">
                        {product.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
