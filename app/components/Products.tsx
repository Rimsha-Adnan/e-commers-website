import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  CarouselContent,
  
} from "@/components/ui/carousel";

type GivingTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPercent:number;
  isNew:boolean;
};

const Products = async () => {
  const query = `
    *[_type == "products"]{ _id, name, image, price, discountPercent, isNew  }[0..4]
    `;
  const items = await client.fetch(query);

  return (
    <div className="mt-[50px] h-auto  md:h-[780px] space-y-8 md:border-b-2 w-auto md:w-[1240px]  md:p-0  m-auto md:border-slate-200">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full"
      >
        <div className="flex md:ml-0 ml-9 md:justify-center items-center mt-[40px]">
          <h1 className="font-bold text-[35px] md:text-[48px]">NEW ARRIVALS</h1>
        </div>
        <CarouselContent>
        <div className="md:flex m-3 md:m-0 md:justify-center justify-center md:items-center h-auto">
        {items.map((item: GivingTypes) => (
          <div
            key={item._id}
            className="h-auto md:w-[325px] justify-center items-center  flex flex-col "
          >
            <div>
              <ul>
                <li>
                  <Link href={`/products/${item._id}`}>
                    <Image
                      src={urlFor( item.image).url()}
                      alt={item.name}
                      width={295}
                      height={298}
                      className="rounded-lg"
                    />
                  </Link>
                </li>
                <li className="font-bold text-[20px] pt-4">{item.name}</li>
                {/* <li className="flex gap-2 font-normal text-[14px] text-slate-400">
                  <Image
                    alt={""}
                    src={item.img2}
                    width={100}
                    height={100}
                    className="bg-transparent"
                  />
                  {items.para}
                </li> */}
                
                <li className="flex space-x-2 font-bold text-[16px]">
                  <h4>{item.isNew}</h4>
                <h4 className="font-bold text-xl mt-1">${item.price}</h4>
                  {/* <h4 className="font-bold text-xl mt-1 line-through text-gray-400">
                    ${item.para1}
                  </h4> */}
                  <h4 className="rounded-3xl h-[30px] w-[65px] text-red-600 mt-1  flex justify-center items-center font-medium">
                  {item?.discountPercent ? ` ${item?.discountPercent} %` : ''}
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      </CarouselContent>
        {/* <CarouselContent>
          <div className="md:flex m-3 md:m-0 md:justify-center justify-center md:items-center h-auto ">
            {items.map((item: GivingTypes) => (
              <CarouselItem
                key={item._id}
                className="h-auto md:w-[295px] justify-center items-center  flex flex-col "
              >
                <div>
                    <div>
                      <Link href={`/products/${item._id}`}>
                        <Image
                          src={item.img}
                          alt={item.heading}
                          width={295}
                          height={298}
                          className="rounded-lg"
                        />
                      </Link>
                    </div>
                    <div className="font-bold text-[20px] pt-4">
                      {item.heading}
                    </div>
                    <div className="flex gap-2 font-normal text-[14px] text-slate-400">
                      <Image
                        alt={""}
                        src={item.img2}
                        width={100}
                        height={100}
                        className="bg-transparent"
                      />
                      {items.para}
                    </div>

                    <div className="flex space-x-2 font-bold text-[16px]">
                      <h4 className="font-bold text-xl mt-1">${item.price}</h4>
                      <h4 className="font-bold text-xl mt-1 line-through text-gray-400">
                        ${item.para1}
                      </h4>
                      <h4 className="rounded-3xl h-[30px] w-[65px] text-red-600 mt-1 bg-red-100 flex justify-center items-center font-medium">
                        {item.para2}%
                      </h4>
                    </div>
                   
                </div>
              </CarouselItem>
            ))}
          </div>
        </CarouselContent> */}

        <div className="flex  w-[300px]  md:w-auto justify-center items-center mt-12">
          <button className=" mb-6 md:mb-0 border  border-slate-300 h-[52px] w-[218px] rounded-3xl">
            <Link href="/products">View All</Link>
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Products;
