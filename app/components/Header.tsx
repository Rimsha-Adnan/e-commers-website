// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import cross from "../../public/cross.png";
// import search from "../../public/search.png";
// import cart from "../../public/cart.png";
// import account from "../../public/account.png";
// import icon from "../../public/search-2.png";
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


// function Header() {
//   const [navOpen, setNavOpen] = useState(false);
//   const handleNavToggle = () => {
//     setNavOpen(!navOpen);
//   };
//   return (
//     <div className=" w-full ">
//       <div className="flex items-center justify-between w-full px-4 h-12 bg-black">
//   <p className="flex-1 text-sm font-normal text-center text-white">
//     Sign up and get 20% off your first order.
//     <a
//       href="#"
//       className="underline font-medium ml-2 text-white"
//     >
//       Sign Up Now
//     </a>
//   </p>
//   {/* Hide the image on small screens */}
//   <div className="hidden md:flex text-white ml-auto pr-36">
//     <Image alt="Close" src={cross} width={16} height={16} />
//   </div>
// </div>

//        {/* main navbar  */}
//         <div className="flex justify-evenly  pr-16 mt-5 p-5 border border-b-2 border-slate-300">
//          <div className="flex h-[24px] w-[675px] justify-center space-x-10  ">
//          <div className="md:hidden">
//          <div className="md:hidden mr-4" onClick={handleNavToggle}>
//         {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//       </div>

     
//       <div
//         className={`fixed top-0 right-[470px] h-[300px] justify-start w-[200px] shadow-lg bg-slate-50 text-black transition-transform duration-300 transform ${
//           navOpen ? 'translate-x-0' : 'translate-x-full'
//         } md:hidden z-40`}
//       >
        
//         <div className="flex justify-end p-6">
//           <AiOutlineClose
//             size={24}
//             className="text-black  cursor-pointer"
//             onClick={handleNavToggle}
//           />
//         </div>

//         <div className="flex flex-col items-start mt-4 ml-8 space-y-4 font-[poppins] text-xl">
//           <Link href="/" className="hover:text-gray-200" onClick={handleNavToggle}>Shop</Link>
//           <Link href="/apply" className="hover:text-gray-200" onClick={handleNavToggle}>On Sale</Link>
//           <Link href="/jobs" className="hover:text-gray-200" onClick={handleNavToggle}>New Arrivals</Link>
//           <Link href="/results" className="hover:text-gray-200" onClick={handleNavToggle}>Brands</Link>
//         </div>
//       </div>
// </div>
//            <h1 className="text-black font-bold font-[] text-2xl">SHOP.CO</h1>
//            <ul className="flex gap-8 whitespace-nowrap font-normal text-[18px] sm:hidden  font-[poppins] text-black">
//              <li>
//                <Link href="/">
//                  Shop <i className="fa-solid fa-angle-down"></i>
//               </Link>
//              </li>
//              <li>
//                <Link href="contact">On Sale</Link>
//              </li>
//              <li>
//                <Link href="about">New Arrivals</Link>
//              </li>
//              <li>
//                <Link href="signup">Brands</Link>
//              </li>
//            </ul>
//          </div>
//          <div className="flex font-[#poppins] justify-center  space-x-5 text-sm font-normal">
//            <div className="flex w-[577px] h-[48px] pr-[280px] justify-center items-center sm:hidden md:flex rounded-3xl bg-[#F5F5F5]">
//              <Image
//               alt="search"
//               src={search}
//               className="h-[24px] w-[24px] mr-4"
//             />
//             <input
//               type="text"
//               className="bg-[#F5F5F5] focus:outline-none text-sm h-[38px] w-[210px]"
//               placeholder="Search for products..."
//             />
//           </div>
//           <div className="flex space-x-3 justify-center items-center">
//              <Image alt="icon" src={icon} className="md:hidden sm:h-[24px] w-[24px]"/>
//             <Image alt="basket" src={cart} className="h-[24px] w-[24px]" />
//             <Image alt="account" src={account} className="h-[24px] w-[24px]" />
//           </div>
//         </div>
//       </div> 
//     </div>
//   );

// }


// export default Header;


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

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-full">
      {/* Top Announcement Bar */}
      <div className="flex items-center justify-between w-full px-4 h-12 bg-black">
        <p className="flex-1 text-sm font-normal text-center text-white">
          Sign up and get 20% off your first order.
          <a
            href="#"
            className="underline font-medium ml-2 text-white"
          >
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
        <ul className="hidden md:flex gap-8 whitespace-nowrap font-normal text-[18px] font-[poppins] text-black">
          <li>
            <Link href="/">
              Shop <i className="fa-solid fa-angle-down"></i>
            </Link>
          </li>
          <li>
            <Link href="contact">On Sale</Link>
          </li>
          <li>
            <Link href="about">New Arrivals</Link>
          </li>
          <li>
            <Link href="signup">Brands</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-[577px] h-[48px] bg-[#F5F5F5] rounded-3xl">
          <Image
            alt="search"
            src={search}
            className="h-[24px] w-[24px] ml-4"
          />
          <input
            type="text"
            className="bg-[#F5F5F5] focus:outline-none text-sm h-[38px] w-full px-2"
            placeholder="Search for products..."
          />
        </div>

        {/* Icons */}
         <div className="flex justify-start space-x-4 ">
          <Image
            alt="search-icon"
            src={icon}
            className="h-[24px] w-[24px] md:hidden"
          />
          <Image alt="cart" src={cart} className="h-[24px] w-[24px]" />
          <Image alt="account" src={account} className="h-[24px] w-[24px]" />
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
            <Link href="/" onClick={handleNavToggle}>
              Shop
            </Link>
            <Link href="/apply" onClick={handleNavToggle}>
              On Sale
            </Link>
            <Link href="/jobs" onClick={handleNavToggle}>
              New Arrivals
            </Link>
            <Link href="/results" onClick={handleNavToggle}>
              Brands
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

