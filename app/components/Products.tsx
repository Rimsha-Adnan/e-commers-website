import React from "react";
import Image from "next/image";
import doller from "../../public/$160.png";
import dollers from "../../public/$260.png";
import frm from "../../public/Frame .png";
import frm2 from "../../public/Frame2.png";
import frm3 from "../../public/Frame3.png";
import frm4 from "../../public/Frame4.png";
import of from "../../public/off.png";
import off from "../../public/off1.png";
import star from "../../public/star.png";
import stars from "../../public/stars.png";

const Products = () => {
  return (
    <div className="mt-[50px] h-[650px] space-y-8 border-b-2 w-[1240px]  m-auto border-slate-200">
      <div className="flex justify-center items-center mt-[40px]">
        <h1 className="font-bold text-[48px]">NEW ARRIVALS</h1>
      </div>
      <div className="md:flex md:justify-center justify-center md:items-center h-auto md:space-x-7">
        <div>
          <ul>
            <li>
              <Image alt="shirt" src={frm} />
            </li>
            <li className="font-bold text-[20px] pt-4">
              T-Shirt With Tape Details
            </li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={stars} />
              4.5/5
            </li>
            <li className="font-bold text-[24px]">$120</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Image alt="shirt" src={frm2} />
            </li>
            <li className="font-bold text-[20px] pt-4">Skinny Fit Jeans</li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={star} />
              3.5/5
            </li>
            <li className="flex space-x-2 font-bold text-[24px]">
              $240{" "}
              <Image
                alt="logo"
                src={dollers}
                className="ml-2 w-[54px] mt-1 h-[26px]"
              />{" "}
              <Image
                alt="logo"
                src={of}
                className="ml-2 w-[54px] mt-1 h-[26px]"
              />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Image alt="shirt" src={frm3} />
            </li>
            <li className="font-bold text-[20px] pt-4">Checkered Shirt</li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={stars} />
              4.5/5
            </li>
            <li className="font-bold text-[24px]">$180</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Image alt="shirt" src={frm4} />
            </li>
            <li className="font-bold text-[20px] pt-4">
              Sleeve Striped T-Shirt
            </li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={star} />
              3.5/5
            </li>
            <li className="flex space-x-2 font-bold text-[24px]">
              $130
              <Image
                alt="logo"
                src={doller}
                className="ml-2 w-[54px] mt-1 h-[26px]"
              />{" "}
              <Image alt="logo" src={off} className="h-[28px] w-[58px]" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className=" border border-slate-300 h-[52px] w-[218px] rounded-3xl">
          View All
        </button>
      </div>
    </div>
  );
};

export default Products;
