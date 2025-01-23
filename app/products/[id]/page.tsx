"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/components/CartContext";
import { useParams } from "next/navigation";
import shirt from "@/public/gradient.png";
import { urlFor } from "@/sanity/lib/image";
import { LuSlidersVertical } from "react-icons/lu";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import tick from "../../../public/Tick.png";
import { BsThreeDots } from "react-icons/bs";
import star from "@/public/star.png";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

type ProductTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
  description: string;
  colors: string[];
  sizes: string[];
  id: string;
  quantity: number;
  imageOne: string;
};
type ReviewTypes = {
  _id: string;
  name: string;
  description: string;
  image: string;
  para: string;
};
type GivingTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
  imageOne: string;
};

const Page = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductTypes | null>(null);
  const [reviews, setReviews] = useState<ReviewTypes[]>([]);
  const [querys, setQuery] = useState<GivingTypes[]>([]);
  const [quantities, setQuantities] = useState([1, 1]);

  // Function to handle increment
  const incrementQuantity = (index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? quantity + 1 : quantity
      )
    );
  };

  // Function to handle decrement
  const decrementQuantity = (index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };

  // Fetch product and review data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product data
        const productQuery = `
          *[_type == "products" && _id == $id][0]{
            _id, name, image, price, discountPercent, isNew, description, colors, sizes, imageOne
          }
        `;
        const fetchedProduct = await client.fetch(productQuery, { id });
        setProduct(fetchedProduct);

        const query = `
            *[_type == "products"]{ _id, name, image, price, discountPercent, isNew, imageOne  }[6..12]
           `;
        const items = await client.fetch(query);
        setQuery(items);
        // Fetch review data
        const reviewQuery = `
          *[_type == "reviews"]{
            _id, name, description, image, para
          }[0..5]
        `;
        const fetchedReviews = await client.fetch(reviewQuery);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) fetchData();
  }, [id]);

  // Add to cart handler
  const handleAddToCart = () => {
    if (!product) return;

    const productToAdd = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    addToCart(productToAdd);
  };
  return (
    <div className=" overflow-hidden  mt-12">
      <div className="w-[450px] ml-2 md:ml-20 ">
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col md:flex-row m-2 md:m-0 md:ml-32">
        <div className="flex flex-col md:flex-row gap-6 w-full lg:w-[600px]  mt-16">
          <div className="order-2 lg:order-1 flex gap-4 w-full sm:flex-col sm:w-auto justify-center sm:justify-start"></div>
          <div className="order-1 lg:order-2 w-full flex sm:block">
            <div className="w-full  sm:w-auto">
              <Image
                src={product?.image ? urlFor(product.image).url() : shirt}
                alt="Main Image"
                width={1000}
                height={1000}
                className="w-full sm:w-[420px] sm:h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div className="w-full lg:w-[636px] flex flex-col px-4 md:px-0 py-12">
          {/* Heading Section */}
          <div className="pb-6 border-b-2 border-gray-200">
            <h1 className="font-extrabold text-[32px] md:text-[40px]">
              {product?.name}
            </h1>
            <div className="flex items-center gap-3">
              <Image
                src={product?.imageOne ? urlFor(product?.imageOne).url() : star}
                width={100}
                height={100}
                alt="Product Rating"
              />
              <h4
                className={
                  product?.isNew
                    ? "text-green-500 text-base"
                    : "text-red-500 text-base"
                }
              >
                {product?.isNew ? `In Stock ` : "Out Of Stock"}{" "}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <p className="font-bold text-[24px] md:text-[32px]">
                ${product?.price}
              </p>
              <button className=" mt-2 text-red-600  flex text-xl text-center items-center font-medium">
                {product?.discountPercent
                  ? ` ${product?.discountPercent} %`
                  : ""}
              </button>
            </div>
            <p className="text-gray-500 font-normal text-[14px] md:text-[16px] leading-relaxed">
              {product?.description}
            </p>
          </div>
          {/* Colors Section */}
          <div className="space-y-2 pb-6 border-b-2 border-gray-200">
            <p className="text-[#00000099] font-normal text-[14px] md:text-[16px]">
              Select Colors
            </p>
            <div className="flex justify-evenly w-40 h-auto gap-4">
              <ul className="flex gap-2 font-normal text-[#757575] text-[15px]  p-2">
                {product?.colors && product.colors.length > 0 ? (
                  product.colors.map((color, index) => (
                    <li
                      key={index}
                      className="w-[86px] h-[36px] flex items-center justify-center bg-white rounded-full shadow-sm border text-[14px] md:text-[16px]  hover:bg-black hover:text-white border-gray-200"
                    >
                      {color}
                    </li>
                  ))
                ) : (
                  <li>No Colors Available</li>
                )}
              </ul>
            </div>
          </div>

          <div className="space-y-3 pb-6 border-b-2 border-gray-200">
            <p className="text-[#00000099] font-normal text-[14px] md:text-[16px]">
              Choose Size
            </p>
            <div className="flex flex-wrap gap-4">
              <ul className="flex gap-2 font-normal text-[#757575] text-[15px]  rounded-full p-2">
                {product?.sizes && product.sizes.length > 0 ? (
                  product.sizes.map((size, index) => (
                    <li
                      key={index}
                      className="w-[36px] h-[36px] flex items-center justify-center bg-white rounded-full shadow-sm border text-[14px] md:text-[16px] border-gray-200 hover:bg-black hover:text-white"
                    >
                      {size}
                    </li>
                  ))
                ) : (
                  <li>No Sizes Available</li>
                )}
              </ul>
            </div>
          </div>

          {/* Quantity and Add to Cart Section */}
          <div className="flex flex-wrap gap-10 items-center mt-5">
            <div className="flex items-center justify-center space-x-8 py-2 bg-gray-200 rounded-full">
              <div
                onClick={() => decrementQuantity(0)}
                className=" select-none cursor-pointer bg-gray-200 px-4 py-2 rounded-full text-sm md:text-lg font-bold"
              >
                <FaMinus />
              </div>
              <div className="text-sm md:text-lg font-semibold">
                {quantities[0]}
              </div>
              <div
                onClick={() => incrementQuantity(0)}
                className=" select-none cursor-pointer bg-gray-200 px-4 py-2 rounded-full text-sm md:text-lg font-bold"
              >
                <IoMdAdd />
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white w-full md:w-[400px] rounded-full text-center h-[52px] text-lg font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className=" md:ml-32 `">
        <div className="">
          <ul className="flex text-center  text-gray-500 ">
            <li className="border-b-2 border-gray-200 w-[450px] py-4 hover:text-black hover:border-black">
              Product Details
            </li>
            <li className=" border-b-2 w-[450px]  border-gray-200 py-4 hover:text-black hover:border-black">
              Rating & Reviews
            </li>
            <li className="border-b-2 border-gray-200 w-[440px] py-4 hover:text-black hover:border-black">
              FAQs
            </li>
          </ul>
        </div>
        <div className="flex justify-between md:w-[1340px] mt-4">
          <div className="flex gap-2 ">
            <h1 className="text-xl font-semibold">All Reviews</h1>
            <p className="text-gray-500 mt-1">(451)</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-[#F0F0F0] px-3 rounded-full ">
              <LuSlidersVertical className="mt-4" />
            </div>
            <div>
              <button className="bg-[#F0F0F0] text-black px-6 py-3 rounded-full">
                Latest <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
            <div>
              <button className="bg-black text-white px-6 py-3 rounded-full">
                Write a Review
              </button>
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 w-full max-w-7xl ">
  {reviews.slice(0, 6).map((item: ReviewTypes) => (
    <li key={item._id} className="flex flex-col gap-y-4 border rounded-[20px] py-4 px-5">
      <div className="flex justify-between items-center">
        <Image
          src={urlFor(item.image).url()}
          alt={item.name}
          height={90}
          width={140}
          className="blur-none filter"
        />
        <BsThreeDots className="h-6 w-6 fill-gray-400" />
      </div>
      <p className="text-xl font-medium font-poppins flex items-center gap-2">
        {item.name}
        <Image src={tick} alt={item.name} className="h-4 w-4" />
      </p>
      <p className="text-base font-normal text-gray-400 font-poppins">
        {item.description}
      </p>
      <p className="text-base font-normal text-gray-400 font-poppins">
        {item.para}
      </p>
    </li>
  ))}
</ul>

        <div className="flex justify-center items-center">
          <button className="border rounded-full px-7 py-3 text-base font-medium">
            Load More Reviews
          </button>
        </div>
      </div>
      <div className="mt-[50px] h-auto  w-auto md:h-[680px] space-y-8 md:w-[1340px] m-auto">
        <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full"
        >
          <div className="flex md:justify-center items-center mt-[40px]">
            <h1 className="font-extrabold  ml-9 md:ml-0 text-[36px] md:text-[40px]">
              YOU MIGHT ALSO LIKE
            </h1>
          </div>
          {/* <div className="flex mt-9 gap-2">
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" /> 
            </div>  */}

          <CarouselContent>
            <div className="md:flex m-3 md:m-0 md:justify-center justify-center md:items-center h-auto">
              
              {querys.map((item: GivingTypes) => (
                <div key={item._id} className="md:w-[340px] h-auto w-full ">
                  <div>
                    <ul>
                      <li>
                        <Link href={`/products/${item._id}`}>
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.name}
                            width={285}
                            height={238}
                            className="rounded-2xl object-cover"
                          />
                        </Link>
                      </li>
                      <li className="font-bold text-[20px] pt-4">
                        {item.name}
                      </li>
                      <li className="flex gap-2 font-normal text-[14px] text-slate-400">
                        <Image
                          alt={""}
                          src={urlFor(item.imageOne).url()}
                          width={100}
                          height={100}
                          className="bg-transparent"
                        />
                      </li>

                      <li className="flex space-x-2 font-bold text-[16px]">
                        <h4>{item.isNew}</h4>
                        <h4 className="font-bold text-xl mt-1">
                          ${item.price}
                        </h4>
                        <h4 className="rounded-3xl h-[30px] w-[65px] text-red-600 mt-1  flex justify-center items-center font-medium">
                          {product?.discountPercent
                            ? ` ${product?.discountPercent} %`
                            : ""}
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
    </div>
  );
};

export default Page;
