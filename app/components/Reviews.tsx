
import * as React from "react";


import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import shine3 from "../../public/stars 5.png";
import tick from "../../public/Tick.png";

const categorySvg = [
  { id: 1, src: shine3, title: "Sarah M.", src1: tick, description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
  { id: 2, src: shine3, title: "Alex K.", src1: tick, description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." },
  { id: 3, src: shine3, title: "James L.", src1: tick, description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
  { id: 4, src: shine3, title: "Sarah M.", src1: tick, description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
  { id: 5, src: shine3, title: "James L.", src1: tick, description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
];

function Reviews() {
  return (
    <div className="h-[65vh] w-[90%] mx-auto flex flex-col justify-center px-8  ">
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
            <div className="flex flex-col gap-3">
              <div className="text-[38px] font-[inter] font-semibold">
              OUR HAPPY CUSTOMERS
              </div>
            </div>

            {/* Previous and Next Buttons */}
            <div className="flex gap-2">
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </div>
          </div>

          {/* Carousel Content */}
          <CarouselContent>
            {categorySvg.map((cate) => (
              <CarouselItem
                key={cate.id}
                className="md:basis-1/4 lg:basis-[180px] w-full   "
                // className="md:h-[140px] md:w-[170px]  "
              >
                <div className="p-1 h-[240px] w-[400px]   rounded-[20px]">
                  <Card>
                    <CardContent className="flex items-center  justify-center p-8  ">
                      <div className="">
                        <Image
                          src={cate.src}
                          alt={cate.title}
                          className="mb-2 blur-none filter "
                          
                        />
                        <p className=" flex text-sm font-normal font-poppins ">
                          {cate.title}
                          <Image
                          src={cate.src1} alt={cate.title} />
                        </p>
                        <p className="text-sm font-normal font-poppins ">
                          {cate.description}
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