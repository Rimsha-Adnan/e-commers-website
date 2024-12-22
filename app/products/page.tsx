import Link from "next/link";
import React from "react";
import Image from "next/image";
import filter from "../../public/filter.png";
import grtaer from "../../public/greaterthan-sign.png";
import downArrow from "../../public/downArrow.png";
import { Slider } from "@/components/ui/slider";

const page = () => {
  const items = [
    {
      id: 1,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 2,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 3,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 4,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 5,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 6,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 7,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 8,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    {
      id: 9,
      heading: "Gradient Graphic T-shirt",
      img2: "/stars 3.png",
      para: "3.5/5",
      price: "$145",
      img: "/image (1).png",
    },
    // {
    //   id: 2,
    //   heading: "Polo with Tipping Details",
    //   img2: "/stars.png",
    //   para: "4.5/5",
    //   price: "$180",
    //   img: "/image (2).png",
    // },
    // {
    //   id: 3,
    //   heading: "Black Striped T-shirt",
    //   para: "5.0/5",
    //   price: "$120",
    //   img3: "/star 5.png",
    //   img4: "/off1.png",
    //   img: "/image(3).png",
    // },
    // {
    //   id: 4,
    //   heading: "Skinny Fit Jeans",
    //   img2: "/star.png",
    //   para: "3.5/5",
    //   price: "$240",
    //   img3: "/$260.png",
    //   img4: "/off.png",
    //   img: "/Frame2.png",
    // },
    // {
    //   id: 5,
    //   heading: "Checkered Shirt",
    //   img2: "/stars.png",
    //   para: "4.5/5",
    //   price: "$180",
    //   img: "/Frame3.png",
    // },
    // {
    //   id: 6,
    //   heading: "Sleeve Striped T-Shirt",
    //   img2: "/stars.png",
    //   para: "4.5/5",
    //   price: "$130",
    //   img3: "/$160.png",
    //   img4: "/off1.png",
    //   img: "/Frame4.png",
    // },
    // {
    //   id: 7,
    //   heading: "Vertical Striped Shirt",
    //   img2: "/star 5.png",
    //   para: "5.0/5",
    //   price: "$212",
    //   img3: "/$232.png",
    //   img4: "/off.png",
    //   img: "/image 1.png",
    // },
    // {
    //   id: 8,
    //   heading: "Courage Graphic T-Shirt",
    //   img2: "/stars 4.png",
    //   para: "4.0/5",
    //   price: "$145",
    //   img: "/image (4).png",
    // },
    // {
    //   id: 9,
    //   heading: "Loose Fit Bermuda Shorts",
    //   img2: "stars 3.png",
    //   para: "3.0/5",
    //   price: "$80",
    //   img: "/image 3.png",
    // },
  ];

  return (
    <div className="flex justify-evenly mt-20">
      <div className="w-[295px] hidden md:flex h-[1440px] border-gray-300 border p-6 rounded-3xl">
        <div>
          {/* filters heading  */}
          <div className="flex justify-between pb-6 p-2 border-b-2 border-gray-200">
            <p className="font-bold text-[20px]">Filters</p>
            <Image src={filter} alt="" />
          </div>
          {/* list of shirts  */}
          <div className="flex flex-col gap-4 mt-8 text-gray-400 pb-6 p-2 border-b-2 border-gray-200">
            <div className="flex justify-between">
              <div>
                <p>T-Shirts</p>
              </div>
              <div>
                <Image src={grtaer} alt="" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Shorts</p>
              </div>
              <div>
                <Image src={grtaer} alt="" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Shirts</p>
              </div>
              <div>
                <Image src={grtaer} alt="" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Jeans</p>
              </div>
              <div>
                <Image src={grtaer} alt="" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Hoodie</p>
              </div>
              <div>
                <Image src={grtaer} alt="" />
              </div>
            </div>
          </div>
          {/* price sizing */}
          <div className="mt-9 pb-6 p-2 border-b-2 border-gray-200">
            <div className="flex justify-between mb-8">
              <h1 className="text-[20px] font-bold">Price</h1>
              <div>
                <Image src={downArrow} alt="" />
              </div>
            </div>
            <Slider defaultValue={[33]} max={100} step={1} />
            <div className="flex justify-around mt-3 text-[16px] font-semibold">
              <p>$50</p>
              <p>$200</p>
            </div>
          </div>
          {/* colors */}
          <div className="mt-9 pb-6  border-b-2 border-gray-200">
            <div className="flex justify-between">
              <h1 className="font-bold text-[20px] ">Colors</h1>
              <div>
                <Image src={downArrow} alt="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-evenly">
                <div className="w-[37px] h-[37px] rounded-full bg-green-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-red-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-yellow-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-orange-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-sky-500"></div>
              </div>
              <div className="flex justify-evenly">
                <div className="w-[37px] h-[37px] rounded-full bg-blue-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-purple-500"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-pink-500"></div>
                <div className="w-[37px] h-[37px] rounded-full border-spacing-3 border border-gray-300 bg-white"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-black"></div>
              </div>
            </div>
          </div>

          {/* size */}
          <div className="mt-9 pb-6  border-b-2 border-gray-200">
            <div className="flex justify-between">
              <h1 className="font-bold text-[20px] ">Size</h1>
              <div>
                <Image src={downArrow} alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-4 mt-6">
                <button className="w-[86px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  XX-Small
                </button>
                <button className="w-[105px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  X-Small
                </button>
                <button className="w-[89px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  Small
                </button>
                <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  Medium
                </button>
                <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  Large
                </button>
                <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  X-Large
                </button>
                <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  XX-Large
                </button>
                <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  3X-Large
                </button>
                <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
                  4X-Large
                </button>
              </div>
            </div>
          </div>

          {/* dress style */}
          <div className="mt-9  ">
            <div className="flex justify-between">
              <h1 className="font-bold text-[20px] ">Dress Style</h1>
              <div>
                <Image src={downArrow} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 text-gray-400  ">
              <div className="flex justify-between">
                <div>
                  <p>Casual</p>
                </div>
                <div>
                  <Image src={grtaer} alt="" />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Formal</p>
                </div>
                <div>
                  <Image src={grtaer} alt="" />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Party</p>
                </div>
                <div>
                  <Image src={grtaer} alt="" />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Gym</p>
                </div>
                <div>
                  <Image src={grtaer} alt="" />
                </div>
              </div>
              <button className="mt-9 bg-black h-[48px] w-[247px] rounded-3xl text-white">Apply Filter</button>
            </div>

          </div>
        </div>
      </div>

      <div className="w-[1035px]">
        <h1 className="font-bold text-[32px] mb-9 text-start ml-12">Casual</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <div key={item.id} className="h-auto w-[295px] flex flex-col ">
              <Link href={`/products/${item.id}`}>
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={295}
                  height={298}
                  className="rounded-lg"
                />
              </Link>
              <h1 className="font-semibold text-lg mt-4">{item.heading}</h1>
              <div className="flex gap-4 items-center mt-2">
                <Image
                  alt={item.heading}
                  src={item.img2}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="text-gray-600">{item.para}</p>
              </div>
              <h4 className="font-bold text-xl mt-4">{item.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
