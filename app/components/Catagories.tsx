import React from 'react';
import Image from 'next/image';
import img1 from "../../public/image4.png";
import img2 from "../../public/image1.png";
import img3 from "../../public/image2.png";
import img4 from "../../public/image3.png";

const Catagories = () => {
  return (
    <div className='flex justify-center'>
    <div className='md:w-[1270px]  md:space-y-6 mb-20 md:mb-0 w-auto h-auto m-3 md:m-0 md:h-[836px]    rounded-[40px] bg-[#F0EEED]'>
        <div className='flex justify-center items-center'>
            <h1 className='font-bold text-[36px] ml-8 md:ml-0 md:text-[48px] mt-[40px] '>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className='flex-col m-3 md:m-0  flex md:flex-row mt-[30px] justify-center items-center gap-7'>
            <div>
            <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Casual</h1>
            <Image alt="man" src={img1} className='relative rounded-[20px]'/>
            </div>
            <div>
            <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Formal</h1>
            <Image alt="man" src={img2} className='relative  h-[189px] md:h-auto rounded-[20px]'/>
            </div>
        </div>
        <div className='flex  m-3 md:m-0 flex-col md:flex-row mt-[30px] justify-center items-center gap-7'>
            <div className=''>
                <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Party</h1>
                <Image alt="man" src={img3} className='relative w-auto h-[189px] rounded-[20px] md:h-[289px] md:w-[684px]'/>
            </div>
            <div className=''>
            <h1 className='absolute z-10 m-10 font-bold text-[36px]'>Gym</h1>
                <Image alt="man" src={img4} className='relative rounded-[20px] mb-3 md:mb-0 h-[189px] w-auto  md:w-[407px] md:h-[289px]'/> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default Catagories