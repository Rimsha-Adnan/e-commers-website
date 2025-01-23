import Link from "next/link";
import React from "react";
import Image from "next/image";
import filter from "../../public/filter.png";
import grtaer from "../../public/greaterthan-sign.png";
import downArrow from "../../public/downArrow.png";
import { Slider } from "@/components/ui/slider";
import { client } from "@/sanity/lib/client";
import { LuSlidersVertical } from "react-icons/lu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { urlFor } from "@/sanity/lib/image";



type GivingTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPercent? : number;
  isNew: boolean;
  imageOne: string;
};
const page = async () => {
  const query = `
  *[_type == "products"]{ _id, name, image, price, discountPercent, isNew, imageOne  }[0..8]
  `;
  const items = await client.fetch(query);
  

  return (
    <div className=" m-2 md:m-0 mt-10 ">
      <div className="w-[250px] ml-2 md:ml-20 mt-8 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Casual</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-evenly md:ml-5">
        <div className="w-[295px] hidden md:flex h-[1440px] border-gray-300 border p-6 rounded-3xl mt-12">
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

        <div className=" w-[1035px] mt-16">
          <div className="flex md:justify-between ">
            <h1 className="font-bold md:text-[32px] text-xl  mb-9 text-start md:ml-12">
              Casual
            </h1>
            <div className="flex text-center mt-4 ml-2">
              <p className="text-gray-400 mr-3 text-sm md:text-lg">
                Showing 1-10 of 100 Products
              </p>
              <p className="text-gray-400 text-lg hidden md:flex">Sort by:</p>
              <p className="mr-10 ml-1 text-lg hidden md:flex ">
                Most Popular <i className="fa-solid fa-angle-down"></i>
              </p>
              <LuSlidersVertical className="ml-3" />
            </div>
          </div>
          <div className="flex  flex-wrap md:justify-center gap-8">
            {items.map((item: GivingTypes) => (
              <div
                key={item._id}
                className="h-auto md:w-[295px]   flex flex-col "

              >
                <div className="">

                <Link href={`/products/${item._id}`}>
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={295}
                    height={298}
                    className="rounded-lg"
                  />
                </Link>
                </div>
                    <h1 className="font-semibold text-lg mt-4">{item.name}</h1>
                  <div className="flex gap-4  justify-start mt-1">
                  <Image
                    alt={""}
                    src={urlFor(item.imageOne).url()}
                    width={120}
                    height={70}
                    className="bg-transparent"
                  />
                    
                </div>
                <div className="flex gap-3 justify-start">
                 
                  <h4 className="font-bold text-xl text-start mt-1">${item.price}</h4>

                  <h4 className="rounded-3xl h-[30px] w-[65px]  text-red-600 mt-1  flex  items-center font-medium">
                  {item?.discountPercent ? ` ${item?.discountPercent} %` : ''}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="md:flex  border-t-2 border-slate-200 m-10">
            <Pagination className="mt-5" >
              <PaginationContent >
                <PaginationItem>
                  <PaginationPrevious href="#" className="border  " />
                </PaginationItem>
                <PaginationItem className="md:ml-[250px]">
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">9</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="border md:ml-[250px]" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div> */}
          <div className="flex flex-wrap justify-center items-center border-t-2 border-slate-200 m-5 md:m-10">
  <Pagination className="mt-5 w-full md:w-auto">
    <PaginationContent className="flex flex-wrap justify-center md:justify-between">
      <PaginationItem>
        <PaginationPrevious href="#" className="border px-4 py-2" />
      </PaginationItem>
        <PaginationItem className="ml-[230px]">
          <PaginationLink href="/pagination">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
      
      <PaginationItem>
        <PaginationNext href="#" className="border px-4 py-2 ml-[200px]" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>

          
        </div>
      </div>
    </div>
  );
};

export default page;
