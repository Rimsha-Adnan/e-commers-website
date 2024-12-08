import React from 'react';
import Image from 'next/image';
import of from "../../public/off.png";
import stars from "../../public/stars.png"
import pic1 from "../../public/image 1.png";
import pic2 from "../../public/image 2.png";
import pic3 from "../../public/image 3.png";
import pic4 from "../../public/image 4.png";
import shine1 from "../../public/stars 3.png";
import shine2 from "../../public/stars 4.png";
import shine3 from "../../public/stars 5.png";
import price from "../../public/$232.png";


const ProductCard = () => {
  return (
    <div className='mt-[50px] h-[650px] space-y-8  w-[1240px] m-auto'>
        <div className='flex justify-center items-center mt-[40px]'>
            <h1 className='font-bold text-[48px]'>TOP SELLING</h1>
        </div>
        <div className='flex justify-center items-center space-x-6'>
        <div>
        <ul>
            <li><Image alt="shirt" src={pic1} className='w-[295px] h-[298px] rounded-3xl'/></li>
            <li className='font-bold text-[20px] pt-4'>Vertical Striped Shirt</li>
            <li className='flex gap-2 font-normal text-[14px] text-slate-400'><Image alt='star' src={shine3}/>5.0/5</li>
            <li className=' flex space-x-2 font-bold text-[24px]'>$212 <Image alt='logo' src={price} className='ml-2 w-[54px] mt-1 h-[26px]'/> <Image alt='logo' src={of} className='ml-2 w-[54px] mt-1 h-[26px]'/></li>
        </ul>
        </div>
        <div>
        <ul>
            <li><Image alt="shirt" src={pic2} className='w-[295px] h-[298px] rounded-3xl'/></li>
            <li className='font-bold text-[20px] pt-4'>COURAGE GRAPHIC T-SHIRT</li>
            <li className='flex gap-2 font-normal text-[14px] text-slate-400'><Image alt='star' src={shine2}/>4.0/5</li>
            <li className=' font-bold text-[24px]'>$145</li>
        </ul>
        </div>
        <div>
        <ul>
            <li><Image alt="shirt" src={pic3} className='w-[295px] h-[298px] rounded-3xl'/></li>
            <li className='font-bold text-[20px] pt-4'>LOOSE FIT BERMUDA SHORTS</li>
            <li className='flex gap-2 font-normal text-[14px] text-slate-400'><Image alt='star' src={shine1}/>3.0/5</li>
            <li className='font-bold text-[24px]'>$80</li>
        </ul>
        </div>
        <div>
        <ul>
            <li className=''><Image alt="shirt" src={pic4} className='w-[295px] h-[298px] rounded-3xl'/></li>
            <li className='font-bold text-[20px] pt-4'>FADED SKINNY JEANS</li>
            <li className='flex gap-2 font-normal text-[14px] text-slate-400'><Image alt='star' src={stars}/>4.5/5</li>
            <li className=' font-bold text-[24px]'>$210</li>
        </ul>
        </div>
        </div>
        <div className='flex justify-center items-center mt-12'>
            <button className=' border border-slate-300 h-[52px] w-[218px] rounded-3xl'>View All</button>
        </div>
        
    </div>
  )
}

export default ProductCard