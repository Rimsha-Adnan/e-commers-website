import React from 'react';
import Image from 'next/image';
import img1 from "../../public/image4.png";
import img2 from "../../public/image1.png";
import img3 from "../../public/image2.png";
import img4 from "../../public/image3.png";

const Catagories = () => {
  return (
    <div className='w-[1270px] h-[836px]  m-auto rounded-[40px] bg-[#F0EEED]'>
        <div className='flex justify-center items-center'>
            <h1 className='font-bold text-[48px] mt-[40px] '>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className='flex-col  flex md:flex-row mt-[30px] justify-center items-center gap-7'>
            <div>
            <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Casual</h1>
            <Image alt="man" src={img1} className='relative rounded-[20px]'/>
            </div>
            <div>
            <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Formal</h1>
            <Image alt="man" src={img2} className='relative rounded-[20px]'/>
            </div>
        </div>
        <div className='flex mt-[30px] justify-center items-center gap-7'>
            <div className=''>
                <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Party</h1>
                <Image alt="man" src={img3} className='relative rounded-[20px] h-[289px] w-[684px]'/>
            </div>
            <div className=''>
            <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Gym</h1>
                <Image alt="man" src={img4} className='relative rounded-[20px] w-[407px] h-[289px]'/> 
            </div>
        </div>
    </div>
  )
}

export default Catagories