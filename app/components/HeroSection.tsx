import React from "react";
import Image from "next/image";
import rectangle from "../../public/Rectangle 2.png";
import versca from "../../public/Group.png";
import zara from "../../public/zara-logo.png";
import gucci from "../../public/gucci-logo.png";
import prada from "../../public/prada-logo.png";
import calvin from "../../public/Group (1).png";
import shine from "../../public/Vector (1).png";
import sine1 from "../../public/Vector (2).png";
import Link from "next/link";
import smllImag from "@/public/Rectangle 2 (1).png";

const HeroSection = () => {
  return (
    <div className="h-auto overflow-hidden md:h-[800px] bg-[#F2F0F1]">
      <div className="flex flex-wrap justify-center md:justify-between ">
        {/* Text Content */}
        <div className="absolute z-10 w-auto md:w-[596px] md:mt-[110px] mt-3 md:ml-[90px] space-y-6 p-5 md:p-0 text-center md:text-left">
          <h1 className="font-extrabold text-4xl md:text-4xl text-start lg:text-7xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm md:text-base h-30 w-auto text-start md:w-[575px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white sm:text-center rounded-3xl md:h-[50px] h-12 w-72 md:w-[200px]">
            <Link href="/products">Shop Now</Link>
          </button>
        </div>
        <div className="absolute z-10 md:hidden mt-[350px] text-center  w-auto ">
          <div className="flex justify-around items-center space-x-6">
            <div>
              <h1 className="font-bold text-[24px]">200+</h1>
              <p className="font-normal text-[12px]">International Brands</p>
            </div>
            <div className="border border-slate-300 h-10"></div>
            <div>
              <h1 className="font-bold text-[24px]">2,000+</h1>
              <p className="font-normal text-[12px]">High-Quality Products</p>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-[24px]">30,000+</h1>
            <p className="font-normal text-[12px]">Happy Customers</p>
          </div>
        </div>

        {/* Decorative Images */}
        <div className="md:w-[2000px]  md:mt-0 mt-[300px] w-auto h-auto flex ">
          <div className=" md:flex justify-center items-center absolute z-10 mt-36 ">
            <div className="">
              <Image
                alt="logo"
                src={shine}
                className="md:ml-[860px] md:h-auto h-10 w-10 md:w-auto ml-8 md:mt-[130px] mt-40"
              />
            </div>
            {/* <div>
            <Image
              alt="logo"
              src={sine1}
              className="md:ml-[660px] ml-72 md:mb-[80px] md:h-auto md:w-auto h-16 w-16"
            />
            </div> */}
            <div className="relative">
              <Image
                alt="logo"
                src={sine1}
                className=" left-[280px] absolute bottom-16 md:bottom-[80px] md:relative md:h-auto md:w-auto h-16 w-16 md:left-[460px]"
              />
            </div>
            {/* <div className="relative flex justify-center md:justify-start">
              <Image
                alt="logo"
                src={sine1}
                className="h-16 w-16 md:h-auto md:w-auto absolute bottom-4 md:bottom-16 md:left-[660px] left-28"
              />
            </div> */}
          </div>
          {/* Main Image */}
          <div className="relative h-auto  w-full flex items-center justify-center">
            <div className="hidden md:flex">
              <Image
                alt="photo"
                src={rectangle}
                className="w-full h-[1200px] right-[100px] md:h-auto  mt-[100px] md:mt-0"
              />
            </div>

            <div className="md:hidden flex ">
              <Image
                alt="photo"
                src={smllImag}
                // objectPosition="objectCenter"
                className="w-[400px] h-[500px] object-center  mt-[160px] md:mt-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      {/* <div className=" flex flex-col md:flex-row py-9  justify-center items-center  top-full whitespace-nowrap bg-black">
        <div className="flex mb-6 md:mb-0  gap-7 md:gap-0 md:justify-evenly h-auto  md:w-[400px] ">
          <Image
            alt="logo"
            src={versca}
            className="h-[24px] w-[118px] md:w-auto md:h-auto"
          />
          <Image
            alt="logo"
            src={zara}
            className="h-[27px] w-[64px] md:h-auto md:w-auto"
          />
          <Image
            alt="logo"
            src={gucci}
            className="h-[26px] w-[110px] md:w-auto md:h-auto"
          />
        </div>
        <div className="flex  gap-5 md:gap-0 justify-evenly md:w-[400px]">
          <Image
            alt="logo"
            src={prada}
            className="h-[21px] w-[127px] md:w-auto md:h-auto"
          />
          <Image
            alt="logo"
            src={calvin}
            className="h-[22px] w-[135px] md:w-auto md:h-auto"
          />
        </div>
      </div> */}

      <div className="flex flex-col  md:gap-32 md:flex-row py-9 md:py-14  justify-center  top-full items-center bg-black">
        {/* First Row of Logos */}
        <div className="flex flex-wrap gap-7 md:gap-28 justify-center items-center mb-6 md:mb-0 w-full md:w-auto ">
          <Image
            alt="logo"
            src={versca}
            className="h-[24px] w-[118px] md:h-auto md:w-auto object-contain"
          />
          <Image
            alt="logo"
            src={zara}
            className="h-[27px] w-[64px] md:h-auto md:w-auto object-contain"
          />
          <Image
            alt="logo"
            src={gucci}
            className="h-[26px] w-[110px] md:h-auto md:w-auto object-contain"
          />
        </div>

        {/* Second Row of Logos */}
        <div className="flex flex-wrap gap-7 md:gap-28 justify-center items-center w-full md:w-auto">
          <Image
            alt="logo"
            src={prada}
            className="h-[21px] w-[127px] md:h-auto md:w-auto object-contain"
          />
          <Image
            alt="logo"
            src={calvin}
            className="h-[22px] w-[135px] md:h-auto md:w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

{
  /* <ul className="flex justify-center items-center px-3 py-6  md:p-10 gap-x-6 md:gap-x-28">
<li>
<Image alt="logo" src={versca} className="h-[24px] w-[118px] md:w-auto md:h-auto" />
</li>
<li>
<Image alt="logo" src={zara} className="h-[27px] w-[64px] md:h-auto md:w-auto" />
</li>
<li>
<Image alt="logo" src={gucci} className="h-[26px] w-[110px] md:w-auto md:h-auto" />
</li>
<li>
<Image alt="logo" src={prada} className="h-[21px] w-[127px] md:w-auto md:h-auto" />
</li>
<li>
<Image alt="logo" src={calvin} className="h-[22px] w-[135px] md:w-auto md:h-auto" />
</li>
</ul> */
}
