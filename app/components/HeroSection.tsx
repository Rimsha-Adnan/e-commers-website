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
import smllImag from '@/public/Rectangle 2 (1).png';
import img1 from "@/public/smll-shine.png";
import img2 from "@/public/smll-shine1.png";

const HeroSection = () => {
  return (
    // <div className=" h-[780px] bg-[#F2F0F1]">
    //   <div className="flex">
    //     <div className="absolute z-10 w-[596px] mt-[110px] ml-[90px] space-y-6">
    //       <h1 className="font-extrabold  text-7xl">
    //         FIND CLOTHES THAT MATCHES YOUR STYLE
    //       </h1>
    //       <p>
    //         Browse through our diverse range of meticulously cratted garments,
    //         designed
    //         <br />
    //         to bring out your individuality and cater to your sense of style.
    //       </p>

    //         <button className="bg-black text-white rounded-3xl h-[50px] w-[200px]">
    //         <Link href="/products">

    //           Shop Now
    //       </Link>
    //         </button>

    //     </div>
    //     <div className="absolute z-10 md:hidden mt-[500px] text-center p-5 ml-5 ">
    //       <div className="flex space-x-6">
    //         <div>
    //           <h1 className="font-bold text-[24px]">200+</h1>
    //           <p className="font-normal text-[12px]">International Brands</p>
    //         </div>
    //         <div className="border-slate-300 border"></div>
    //         <div>
    //           <h1 className="font-bold text-[24px]">2,000+</h1>
    //           <p className="font-normal text-[12px]">High-Quality Products</p>
    //         </div>
    //       </div>
    //       <div>
    //         <h1 className="font-bold text-[24px]">30,000+</h1>
    //         <p className="font-normal text-[12px]">Happy Customers</p>
    //       </div>
    //     </div>
    //     <div className="flex justify-center items-center absolute z-10  ">
    //       <Image
    //         alt="logo"
    //         src={shine}
    //         className=" ml-[780px] mt-[340px] flex justify-center items-center"
    //       />
    //       <Image alt="logo" src={sine1} className="ml-[500px] mb-[80px]" />
    //     </div>

    //     <div className="relative ml-12">
    //       <Image alt="photo" src={rectangle} />
    //     </div>
    //   </div>
    //   <div className="h-[122px] whitespace-nowrap bg-black">
    //     <ul className="flex justify-center items-center p-10 space-x-28">
    //       <li>
    //         <Image alt="logo" src={versca} />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={zara} />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={gucci} />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={prada} />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={calvin} />
    //       </li>
    //     </ul>
    //   </div>
    // </div>



    // <div className="h-auto overflow-hidden md:h-[800px] bg-[#F2F0F1]">
    //   <div className="flex flex-wrap   justify-center md:justify-between  relative">
    //     {/* Text Content */}
    //     <div className="absolute z-10 w-auto md:w-[596px] md:mt-[110px] mt-3 md:ml-[90px] space-y-6 p-5 md:p-0 text-center md:text-left">
    //       <h1 className="font-extrabold text-4xl  md:text-4xl text-start lg:text-7xl">
    //         FIND CLOTHES THAT MATCHES YOUR STYLE
    //       </h1>
    //       <p className="text-sm md:text-base h-30  w-auto text-start md:w-[575px]">
    //         Browse through our diverse range of meticulously crafted garments,
    //         designed to bring out your individuality and cater to your sense of
    //         style.
    //       </p>
    //       <button className="bg-black text-white sm:text-center  rounded-3xl md:h-[50px] h-12 w-72 md:w-[200px]  ">
    //         <Link href="/products">Shop Now</Link>
    //       </button>
    //     </div>

    //     {/* Stats Section (Mobile Only) */}
        // <div className="absolute z-10 md:hidden mt-[380px] text-center px-[140px] w-auto ">
        //   <div className="flex justify-around items-center space-x-6">
        //     <div>
        //       <h1 className="font-bold text-[18px]">200+</h1>
        //       <p className="font-normal text-[12px]">International Brands</p>
        //     </div>
        //     <div className="border border-slate-300 h-10"></div>
        //     <div>
        //       <h1 className="font-bold text-[18px]">2,000+</h1>
        //       <p className="font-normal text-[12px]">High-Quality Products</p>
        //     </div>
        //   </div>
        //   <div className="mt-4">
        //     <h1 className="font-bold text-[18px]">30,000+</h1>
        //     <p className="font-normal text-[12px]">Happy Customers</p>
        //   </div>
        // </div>

    //     {/* Decorative Images */}
    //     <div className="md:w-[2000px] mt-[150px] w-auto h-auto flex justify-center">
    //       <div className=" md:flex justify-center items-center absolute z-10 mt-40">
    //         <Image
    //           alt="logo"
    //           src={shine}
    //           className="md:ml-[740px] ml-40 md:mt-[250px] mt-80"
    //         />
    //         <Image
    //           alt="logo"
    //           src={sine1}
    //           className="md:ml-[560px] mt-0 ml-60 md:mb-[80px]"
    //         />
    //       </div>
    //       {/* Main Image */}
    //       <div className="relative w-full  flex items-center justify-center">
    //         <Image
    //           alt="photo"
    //           src={rectangle}
    //           className="w-full mt-[400px] md:mt-0 right-24"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Brands Section */}
    //   <div className="md:h-[440px] whitespace-nowrap bg-black ">
    //     <ul className="flex justify-center items-center p-5 md:p-10 gap-x-6 md:gap-x-28">
    //       <li>
    //         <Image alt="logo" src={versca} className="h-8 md:h-auto" />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={zara} className="h-8 md:h-auto" />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={gucci} className="h-8 md:h-auto" />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={prada} className="h-8 md:h-auto" />
    //       </li>
    //       <li>
    //         <Image alt="logo" src={calvin} className="h-8 md:h-auto" />
    //       </li>
    //     </ul>
    //   </div>
    // </div>

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
    <div className="absolute z-10 md:hidden mt-[390px] text-center  w-auto ">
          <div className="flex justify-around items-center space-x-6">
            <div>
              <h1 className="font-bold text-[18px]">200+</h1>
              <p className="font-normal text-[12px]">International Brands</p>
            </div>
            <div className="border border-slate-300 h-10"></div>
            <div>
              <h1 className="font-bold text-[18px]">2,000+</h1>
              <p className="font-normal text-[12px]">High-Quality Products</p>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-[18px]">30,000+</h1>
            <p className="font-normal text-[12px]">Happy Customers</p>
          </div>
        </div>

    {/* Decorative Images */}
    <div className="md:w-[2000px]  md:mt-0 mt-[300px] w-[400px] h-auto flex justify-">
      <div className="hidden md:flex justify-center items-center absolute z-10 mt-40 ">
        <Image
          alt="logo"
          src={shine}
          className="md:ml-[740px] ml-40 md:mt-[250px] mt-80"
        />
        <Image
          alt="logo"
          src={sine1}
          className="md:ml-[560px] mt-0 ml-60 md:mb-[80px]"
        />
        {/* <div className="md:hidden flex justify-between items-cent ">
          <Image src={img1} alt="" className=""
          />
          <Image src={img2} alt="" className=""/>
        </div> */}
      </div>
      {/* Main Image */}
      <div className="relative h-auto  w-full flex items-center justify-center">
        <div className="hidden md:flex">
        <Image
          alt="photo"
          src={rectangle}
          className="w-full h-[1200px] right-[100px] md:h-auto   mt-[100px] md:mt-0"
        />
        </div>
        
      
        <div className="md:hidden flex ">
        <Image
          alt="photo"
          src={smllImag}
          // objectPosition="objectCenter"
          className="w-full   h-[300px] object-center  mt-[180px] md:mt-0"
        />
        </div>
       
      </div>
    </div>
  </div>

  {/* Brands Section */}
  <div className="md:h-[130px] top-full whitespace-nowrap bg-black">
    <ul className="flex justify-center items-center p-5 md:p-10 gap-x-6 md:gap-x-28">
      <li>
        <Image alt="logo" src={versca} className="h-8 md:h-auto" />
      </li>
      <li>
        <Image alt="logo" src={zara} className="h-8 md:h-auto" />
      </li>
      <li>
        <Image alt="logo" src={gucci} className="h-8 md:h-auto" />
      </li>
      <li>
        <Image alt="logo" src={prada} className="h-8 md:h-auto" />
      </li>
      <li>
        <Image alt="logo" src={calvin} className="h-8 md:h-auto" />
      </li>
    </ul>
  </div>
</div>

  );
};

export default HeroSection;
