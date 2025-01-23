import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";
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
  imageOne: string;
};
  const  Related = async () => {
  
    const query = `
     *[_type == "products"]{ _id, name, image, price, discountPercent, isNew, imageOne  }[3..6]
    `;
    const items = await client.fetch(query);
  return (
    <div className="mt-[50px] h-auto  w-auto md:h-[680px] space-y-8 md:w-[1240px] m-auto">
      <Carousel>
      <div className="flex md:justify-center items-center mt-[40px]">
        <h1 className="font-bold  ml-9 md:ml-0 text-[36px] md:text-[48px]">TOP SELLING</h1>
      </div>
      {/* <div className="md:flex m-3 md:m-0 space-y-5 md:space-y-0 md:justify-center justify-center md:items-center space-x-7">
        <div>
          <ul>
            <li>
              <Image
                alt="shirt"
                src={pic1}
                className="w-[295px] h-[298px] rounded-3xl"
              />
            </li>
            <li className="font-bold text-[20px] pt-4">
              Vertical Striped Shirt
            </li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={shine3} />
              5.0/5
            </li>
            <li className=" flex space-x-2 font-bold text-[24px]">
              $212{" "}
              <Image
                alt="logo"
                src={price}
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
              <Image
                alt="shirt"
                src={pic2}
                className="w-[295px] h-[298px] rounded-3xl"
              />
            </li>
            <li className="font-bold text-[20px] pt-4">
              Courage Graphic T-Shirt
            </li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={shine2} />
              4.0/5
            </li>
            <li className=" font-bold text-[24px]">$145</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Image
                alt="shirt"
                src={pic3}
                className="w-[295px] h-[298px] rounded-3xl"
              />
            </li>
            <li className="font-bold text-[20px] pt-4">
              Loose Fit Bermuda Short
            </li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={shine1} />
              3.0/5
            </li>
            <li className="font-bold text-[24px]">$80</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="">
              <Image
                alt="shirt"
                src={pic4}
                className="w-[295px] h-[298px] rounded-3xl"
              />
            </li>
            <li className="font-bold text-[20px] pt-4">Faded Skinny Jeans</li>
            <li className="flex gap-2 font-normal text-[14px] text-slate-400">
              <Image alt="star" src={stars} />
              4.5/5
            </li>
            <li className=" font-bold text-[24px]">$210</li>
          </ul>
        </div>
      </div> */}
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
                <li className="flex gap-2 font-normal text-[14px] text-slate-400">
                  <Image
                    alt={""}
                    src={urlFor( item.imageOne).url()}
                    width={100}
                    height={100}
                    className="bg-transparent"
                  />
                  
                </li>
                
                <li className="flex space-x-2 font-bold text-[16px]">
                  <h4>{item.isNew}</h4>
                <h4 className="font-bold text-xl mt-1">${item.price}</h4>
                  <h4 className="rounded-3xl h-[30px] w-[65px] text-red-600 mt-1 bg-red-100 flex justify-center items-center font-medium">
                    {item.discountPercent}%
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Related;
