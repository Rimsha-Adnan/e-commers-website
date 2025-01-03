"use client";
import React from "react";
import Image from "next/image";
import dustbin from "../../public/dustbin.png";
import { useCart } from "../components/CartContext";



type  ItemsType = {
  id:string;
  img: string;
  title: string;
  price: number;
  quantity: number;
}



const Page = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();
  return (
    <div className="px-4 md:px-10 lg:px-24">
      <div className="flex flex-col mt-7">
        <div>
          <h2 className="font-extrabold text-[30px] md:text-[40px] text-center md:text-left">
            YOUR CART
          </h2>
        </div>
        <div className="flex flex-col md:flex-row mt-9 gap-6 md:gap-9">
          {/* Left Side - Cart Items */}
          <div
           
            className="border-gray-100 rounded-2xl border-2 flex flex-col gap-6 md:gap-9 w-full md:w-[715px] p-4 md:p-6"
          >
          {cartItems.map((items: ItemsType, index: number) => {
            return (
                <div  key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div>
                    <Image
                      alt=""
                      width={120}
                      height={120}
                      src={items.img}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold">{items.title}</h2>
                    <p className="text-gray-600">Size: Large</p>
                    <p className="text-gray-600">Color: White</p>
                    <p className="font-bold">${items.price}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image onClick={()=>removeFromCart(items.id)} alt="" src={dustbin} className="cursor-pointer" />
                    {/* <Image alt="" src={SignDiv} className="cursor-pointer" /> */}
                    <p>Quantity : {items.quantity}</p>
                  </div>
                </div>
            );
          })}
              </div>
          {/* Right Side - Order Summary */}
          <div className="w-full md:w-[505px] h-auto md:h-[458px] border-gray-100 justify-center rounded-2xl border-2 flex flex-col gap-6 p-4 md:p-6">
            <p className="font-bold text-[20px] md:text-[24px] text-center md:text-left">
              Order Summary
            </p>
            <div className="text-start flex flex-col gap-5 border-b-2 border-gray-100 pb-3">
              <div className="flex justify-between w-full">
                <p>Subtotal</p>
                <p>${getTotalPrice()}</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Discount (-20%)</p>
                <p>-$113</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Delivery Fee</p>
                <p>$15</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <p>Total</p>
              <p>${getTotalPrice()}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <button className="w-full md:w-[326px] h-[48px] rounded-3xl bg-[#F0F0F0]">
                Add More Code
              </button>
              <button className="w-full md:w-[119px] h-[48px] bg-black text-white rounded-3xl">
                Apply
              </button>
            </div>
            <div className="flex justify-center">
              <button className="w-full md:w-[457px] h-[60px] bg-black text-white font-bold text-[16px] rounded-3xl">
                Go To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
