"use client";
import { useParams } from "next/navigation";

import React from "react";
import Image from "next/image";

const Page = () => {

  const { id } = useParams();

  type Product = {
    id: number;
    heading: string;
    para: string;
    stars: string;
    price: string;
    price2?: string; // Optional field if not all products have it
    // img: string;
    img1: string; // Optional field if not all products have it
    img2: string; // Optional field if not all products have it
    img3: string; // Optional field if not all products have it
    img4: string; // Optional field if not all products have it
    btn: string;
    clor1: string;
    clor2: string;
    clor3: string;
    size1: string;
    size2: string;
    size3: string;
    size4: string;
  };

  const myItems: Product[] = [
    {
      id: 1,
      heading: "One Life Graphic T-shirt",
      para: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      price: "$260",
      price2: "$300",
      stars: "/star.png",
      img4: "/greenimage4.png",
      img1: "/greenimage1.png",
      img2: "/greenimage2.png",
      img3: "/greenimage3.png",
      btn: "-40%",
      clor1: "bg-yellow-900",
      clor2: "bg-blue-400",
      clor3: "bg-purple-200",
      size1: "Small",
      size2: "Medium",
      size3: "Large",
      size4: "X-large",
    },
    // {
    //   id: 2,
    //   heading: "",
    //   para: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    //   price: "$260",
    //   price2: "$300",
    //   stars: "/star.png",
    //   img4: "/greenimage4.png",
    //   img1: "/greenimage1.png",
    //   img2: "/greenimage2.png",
    //   img3: "/greenimage3.png",
    //   btn: "-40%",
    //   clor1: "bg-brown-200",
    //   clor2: "bg-blue-400",
    //   clor3: "bg-purple-200",
    //   size1: "Small",
    //   size2: "Medium",
    //   size3: "Large",
    //   size4: "X-large"
    // },
  ];

  const finsding = myItems.find((product) => product.id.toString() === id);

  if (!finsding) {
    return <div>Product not found </div>;
  }

  return (
  
    <div className="flex flex-col md:flex-row justify-center mt-16">
       <div className="flex flex-col md:flex-row gap-6 w-full lg:w-[600px] justify-center">
        <div className="order-2 lg:order-1 flex gap-4 w-full sm:flex-col sm:w-auto justify-center sm:justify-start">
          <Image
            src={finsding.img1}
            alt="Thumbnail 1"
            width={110}
            height={110}
            className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px]"
          />
          <Image
            src={finsding.img2}
            alt="Thumbnail 2"
            width={110}
            height={110}
            className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px]"
          />
          <Image
            src={finsding.img3}
            alt="Thumbnail 3"
            width={110}
            height={110}
            className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px]"
          />
        </div>
        <div className="order-1 lg:order-2 w-full flex sm:block">
          <div className="w-full  sm:w-auto">
            <Image
              src={finsding.img4}
              alt="Main Image"
              width={500}
              height={520}
              className="w-full sm:w-[420px] sm:h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="w-full lg:w-[636px] flex flex-col gap-6 px-4 md:px-0">
        {/* Heading Section */}
        <div className="space-y-4 pb-6 border-b-2 border-gray-200">
          <h1 className="font-extrabold text-[32px] md:text-[40px]">
            {finsding.heading}
          </h1>
          <Image
            src={finsding.stars}
            width={100}
            height={100}
            alt="Product Rating"
          />
          <div className="flex flex-wrap gap-4 items-center">
            <p className="font-bold text-[24px] md:text-[32px]">
              {finsding.price}
            </p>
            <p className="font-semibold text-[20px] md:text-[32px] text-gray-400 line-through">
              {finsding.price2}
            </p>
            <button className="rounded-3xl h-[36px] w-[90px] text-red-600 bg-red-200 flex justify-center items-center font-medium">
              {finsding.btn}
            </button>
          </div>
          <p className="text-gray-500 font-normal text-[14px] md:text-[16px] leading-relaxed">
            {finsding.para}
          </p>
        </div>

        {/* Colors Section */}
        <div className="space-y-2 pb-6 border-b-2 border-gray-200">
          <p className="text-[#00000099] font-normal text-[14px] md:text-[16px]">
            Select Colors
          </p>
          <div className="flex gap-4">
            <div
              className={`${finsding.clor1} rounded-full h-[24px] w-[24px]`}
            ></div>
            <div
              className={`${finsding.clor2} rounded-full h-[24px] w-[24px]`}
            ></div>
            <div
              className={`${finsding.clor3} rounded-full h-[24px] w-[24px]`}
            ></div>
          </div>
        </div>

        {/* Size Section */}
        <div className="space-y-3 pb-6 border-b-2 border-gray-200">
          <p className="text-[#00000099] font-normal text-[14px] md:text-[16px]">
            Choose Size
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="w-[86px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {finsding.size1}
            </button>
            <button className="w-[105px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {finsding.size2}
            </button>
            <button className="w-[89px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {finsding.size3}
            </button>
            <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {finsding.size4}
            </button>
          </div>
        </div>

        {/* Quantity and Add to Cart Section */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center justify-around w-full md:w-[170px] bg-[#F0F0F0] rounded-full h-[52px] px-4">
            <button className="text-2xl font-medium">-</button>
            <p className="font-semibold text-lg">1</p>
            <button className="text-2xl font-medium">+</button>
          </div>
          <button className="bg-black text-white w-full md:w-[400px] rounded-full text-center h-[52px] text-lg font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
