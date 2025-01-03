"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/components/CartContext";
import { useParams } from "next/navigation";
import star from "../../../public/stars 4.png";
import shirt from "../../../public/Frame .png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type ProductTypes = {
  _id: string;
  heading: string;
  img2: string ;
  img: string ;
  para: string;
  price: number;
  para1 : string;
  para2 : number;
  paragraph: string;
  color1: string;
  color2: string;
  color3: string;
  size1: string;
  size2: string;
  size3: string;
  size4: string;
  id:string;
  quantity: number;
  

};



const Page = () => {
  const { id } = useParams();  
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductTypes>();

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `
        *[_type == "post" && _id == $id][0]{
          _id, heading, img2, price, img, para, size1, size2, size3, size4, color1, color2, color3, paragraph, para1, para2
        }
      `;
        const fetchedProduct = await client.fetch(query, { id });
        setProduct(fetchedProduct);
        console.log("data ",fetchedProduct);
        
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // Add to cart handler
  const handleAddToCart = () => {
    if (!product) return;

    const productToAdd = {
      id: product._id,
      title: product.heading,
      price: product.price,
      img: product.img,
      quantity: 1,
    };

    addToCart(productToAdd);
  };
  return (
    <div className="  mt-16">
      <div className="w-[450px] ml-20 ">
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
                  <BreadcrumbSeparator />
                  <BreadcrumbPage>{product?.heading}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            </div>
            <div className="flex flex-col md:flex-row ml-16">

      <div className="flex flex-col md:flex-row gap-6 w-full lg:w-[600px]  mt-16">
        <div className="order-2 lg:order-1 flex gap-4 w-full sm:flex-col sm:w-auto justify-center sm:justify-start">
        </div>
        <div className="order-1 lg:order-2 w-full flex sm:block">
          <div className="w-full  sm:w-auto">
            <Image
              src={product?.img || shirt }
              alt="Main Image"
              width={900}
              height={900}
              className="w-full sm:w-[420px] sm:h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="w-full lg:w-[636px] flex flex-col gap-6 px-4 md:px-0 py-12">
        {/* Heading Section */}
        <div className="space-y-2 pb-6 border-b-2 border-gray-200">
          <h1 className="font-extrabold text-[32px] md:text-[40px]">
            {product?.heading}
          </h1>
          <div className="flex items-center gap-2">

          <Image
            src={product?.img2 || star }
            width={100}
            height={100}
            alt="Product Rating"
          />
          <p className="text-black font-medium text-base">{product?.para}</p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <p className="font-bold text-[24px] md:text-[32px]">
              ${product?.price}
            </p>
            <p className="font-semibold text-[20px] md:text-[32px] text-gray-400 line-through">
              ${product?.para1}
            </p>
            <button className="rounded-3xl h-[30px] w-[65px] text-red-600 bg-red-100 flex justify-center items-center font-medium">
              {product?.para2}%
            </button>
          </div>
          <p className="text-gray-500 font-normal text-[14px] md:text-[16px] leading-relaxed">
            {product?.paragraph}
          </p>
        </div>

        {/* Colors Section */}
        <div className="space-y-2 pb-6 border-b-2 border-gray-200">
          <p className="text-[#00000099] font-normal text-[14px] md:text-[16px]">
            Select Colors
          </p>
          <div className="flex justify-evenly w-40 h-auto gap-4">
            <div
              className={`${product?.color1} rounded-full h-[24px] w-[24px]`}
            ></div>
            <div
              className={`${product?.color2} rounded-full h-[24px] w-[24px]`}
            ></div>
            <div
              className={`${product?.color3} rounded-full h-[24px] w-[24px]`}
            ></div>
          </div>
        </div>

        
        <div className="space-y-3 pb-6 border-b-2 border-gray-200">
          <p className="text-[#00000099] font-normal text-[14px] md:text-[16px]">
            Choose Size
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="w-[86px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {product?.size1}
            </button>
            <button className="w-[105px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {product?.size2}
            </button>
            <button className="w-[89px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {product?.size3}
            </button>
            <button className="w-[104px] h-[36px] bg-[#F0F0F0] rounded-full text-[#00000099] font-normal text-[14px] md:text-[16px] text-center hover:bg-black hover:text-white">
              {product?.size4}
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
          <button
            onClick={handleAddToCart}
            className="bg-black text-white w-full md:w-[400px] rounded-full text-center h-[52px] text-lg font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
            </div>
    </div>
  );
};

export default Page;
