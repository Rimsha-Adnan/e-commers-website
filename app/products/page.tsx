import Link from "next/link";
import React from "react";
import Image from "next/image";
import filter from "../../public/filter.png";
import grtaer from "../../public/greaterthan-sign.png";
import downArrow from "../../public/downArrow.png";
import { Slider } from "@/components/ui/slider";
import { client } from "@/sanity/lib/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

type GivingTypes = {
  _id: string;
  heading: string;
  img2: string;
  img: string ;
  para: string;
  price: number;
  para1 : string;
  para2 : number;
};
const page = async () => {
  const query = `
  *[_type == "post"]{ _id, heading , price , img , img2 , para, para1, para2 }
  `;
  const items = await client.fetch(query);

  return (
    <div className=" mt-10 ">
      <div className="w-[250px] ml-20 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Casual</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      </div>
      <div className="flex justify-evenly ml-5">

      <div className="w-[295px] hidden md:flex h-[1440px] border-gray-300 border p-6 rounded-3xl mt-20">
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
              <button className="mt-9 bg-black h-[48px] w-[247px] rounded-3xl text-white">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1035px] mt-20">
        <h1 className="font-bold text-[32px] mb-9  text-start ml-12">Casual</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item: GivingTypes) => (
            <div key={item._id} className="h-auto w-[295px] flex flex-col ">
              <Link href={`/products/${item._id}`}>
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={295}
                  height={298}
                  className="rounded-lg"
                />
              </Link>
              <h1 className="font-semibold text-lg mt-4">{item.heading}</h1>
              <div className="flex gap-4 items-center mt-1">
                <Image
                  alt={""}
                  src={item.img2}
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
                <p className="text-gray-600">{item.para}</p>
              </div>
              <div className="flex gap-3 items-center">
                <h4 className="font-bold text-xl mt-1">${item.price}</h4>
                <h4 className="font-bold text-xl mt-1 line-through text-gray-400">
                  ${item.para1}
                </h4>
                <h4 className="rounded-3xl h-[30px] w-[65px] text-red-600 mt-1 bg-red-100 flex justify-center items-center font-medium">{item.para2}%</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t-2 border-slate-200 m-10">
          <div className="w-[100px] border-2 border-slate-400 mt-5 rounded-lg flex items-center gap-1  ">
          <BiLeftArrowAlt className="ml-2" />
            <button className="">Previous</button>
          </div>
          <div className="mt-5">
            <ul className="flex gap-5 text-slate-400">
              <li className="h-8 w-8 bg-slate-300 text-center rounded-md text-black" >1</li>
              <li>2</li>
              <li>3</li>
              <li>...</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
          </div>
          <div className="mt-5 rounded-lg w-[90px] border-2 flex items-center justify-center gap-2  border-slate-400">
            <button> Next</button>
          <BiRightArrowAlt className="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
