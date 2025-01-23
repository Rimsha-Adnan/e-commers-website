 "use client";
 import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { FaRegHeart } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/app/components/WishlistContext';
import { urlFor } from '@/sanity/lib/image';


type GivingTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
  category: string;
  colors: string[];
  sizes: string[];
};
const ItemsPage = () => {
    const searchParams = useSearchParams(); // Get the query parameters from the URL
  const categorys = searchParams.get("category") || "all";
   
const [data , setData] = useState<GivingTypes[]>([])
const { addToWishlist } = useWishlist();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products for category:", categorys); // Log the category
        const response = await fetch(`https://template1-neon-nu.vercel.app/api/products?category=${encodeURIComponent(categorys)}`);
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const responses = await response.json();
        console.log("Fetched products data:", data); 
        setData(responses.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categorys , data]);
  return (
    <div>
      <div>
            <div>
                <div className='flex  justify-between'>
                    <div className='w-full sm:w-[1092px]'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                            {data.map((items) => (
                                <div key={items._id} className='h-[533px] flex p-3 md:p-0  '>
                                    <div className='w-full sm:w-[270px] h-[320px] '>
                                        <div className='md:h-[348px] md:w-[348px]  bg-gray-100 flex items-center justify-center'>
                                            <Link href={`/products/${items._id}`}>
                                                <Image alt='' src={urlFor(items.image).url()} className='object-cover' width={348} height={348} />
                                            </Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='w-[201px] h-[84px] '>
                                                <p className='text-red-800 mt-9'>{items.isNew}</p>
                                                <p className='mt-2 font-medium text-[15px]'>{items.name}</p>
                                                <p className=' font-normal text-[#757575] text-[15px]'>{items.category} </p>
                                                <p className=' font-normal text-[#757575] text-[15px]'>  {items.colors && items.colors.length > 0
                                                    ? items.colors.join(', ')
                                                    : 'No Colors Available'} Color</p>
                                                     <p className=' font-normal text-[#757575] text-[15px]'>  {items.sizes && items.sizes.length > 0
                                                    ? items.sizes.join(', ')
                                                    : 'No sixes Available'} Size</p>
                                                <Link className='text-black font-medium text-[15px]' href='/'>
                                                     $ {items.price}
                                                </Link>

                                                <button className=' ml-6 mt-5' onClick={() => addToWishlist(items)}><FaRegHeart className="h-[28px] w-[28px]" />
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))};
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
};

export default ItemsPage;