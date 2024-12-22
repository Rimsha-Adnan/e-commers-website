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


const HeroSection = () => {
  return (
    <div className=" h-[780px] bg-[#F2F0F1]">
      <div className="flex">
        <div className="absolute z-10 w-[596px] mt-[110px] ml-[90px] space-y-6">
          <h1 className="font-extrabold  text-7xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously cratted garments,
            designed
            <br />
            to bring out your individuality and cater to your sense of style.
          </p>
          
            <button className="bg-black text-white rounded-3xl h-[50px] w-[200px]">
              Shop Now
            </button>
         
        </div>
        <div className="absolute z-10 md:hidden mt-[500px] text-center p-5 ml-5 ">
          <div className="flex space-x-6">
            <div>
              <h1 className="font-bold text-[24px]">200+</h1>
              <p className="font-normal text-[12px]">International Brands</p>
            </div>
            <div className="border-slate-300 border"></div>
            <div>
              <h1 className="font-bold text-[24px]">2,000+</h1>
              <p className="font-normal text-[12px]">High-Quality Products</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[24px]">30,000+</h1>
            <p className="font-normal text-[12px]">Happy Customers</p>
          </div>
        </div>
        <div className="flex justify-center items-center absolute z-10  ">
          <Image
            alt="logo"
            src={shine}
            className=" ml-[780px] mt-[340px] flex justify-center items-center"
          />
          <Image alt="logo" src={sine1} className="ml-[500px] mb-[80px]" />
        </div>

        <div className="relative ml-12">
          <Image alt="photo" src={rectangle} />
        </div>
      </div>
      <div className="h-[122px] whitespace-nowrap bg-black">
        <ul className="flex justify-center items-center p-10 space-x-28">
          <li>
            <Image alt="logo" src={versca} />
          </li>
          <li>
            <Image alt="logo" src={zara} />
          </li>
          <li>
            <Image alt="logo" src={gucci} />
          </li>
          <li>
            <Image alt="logo" src={prada} />
          </li>
          <li>
            <Image alt="logo" src={calvin} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
