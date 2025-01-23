import * as React from "react";
import {
    Card,
    CardContent,
  } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import tick from "../../public/Tick.png";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
type Info = {
  _id: number;
  name: string;
  description: string;
  image: string;
}



async function Reviews() {
   const query = `
    *[_type == "reviews"]{ _id, name, image, description }[0..9]
    `;
    const items = await client.fetch(query);
  return (
    <div className="md:h-[20vh] md:mt-56  h-auto md:w-[90%] w-auto mx-auto flex md:flex-col  flex-row justify-center px-4  ">
      <div className="container">
        {/* Carousel with Heading and Buttons */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-full"
        >
          {/* Heading and Buttons */}
          <div className="flex justify-between mb-6">
            {/* Category Heading */}
            <div className="flex  gap-5">
              <div className="md:text-[38px] text-[30px] font-[inter] font-extrabold">
              OUR HAPPY CUSTOMERS
              </div>
            </div>

            {/* Previous and Next Buttons */}
            <div className="flex mt-9 gap-2">
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </div>
          </div>

          {/* Carousel Content */}
          <CarouselContent>
            {items.map((item: Info) => (
              <CarouselItem
                key={item._id}
                className="md:basis-1/3  w-full  "
                // className="md:h-[140px] md:w-[170px] h-auto w-auto  "
              >
                <div className=" md:h-[300px] md:w-[450px] rounded-[20px]">
                  <Card>
                    <CardContent className="flex items-center  justify-center p-5  ">
                      <div className="">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          height={100}
                          width={140}
                          className="mb-2 blur-none filter "
                          
                        />
                        <p className=" flex text-xl font-medium font-poppins mt-2 ">
                          {item.name}
                          <Image
                          src={tick} alt={item.name} className="h-4 w-4 mt-2 ml-2"/>
                        </p>
                        <p className="text-sm font-normal font-poppins mt-3">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;