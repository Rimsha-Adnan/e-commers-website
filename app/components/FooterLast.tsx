import React from 'react';
import Image from 'next/image';
import mails from "../../public/mail.png";

const FooterLast = () => {
  return (
    <div className='w-[1240px] h-[180px] absolute z-10 ml-[120px] mt-[160px] flex bg-black rounded-[20px] m-auto'>
        <div className='mt-[30px]'>
            <h1 className='text-white font-bold text-[40px] w-[551px] ml-28 '>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>
        <div className='ml-36 mt-[15px]' >
            <div className='text-center text-black '>
                <Image alt="mail" src={mails} className='h-[24px] w-[24px] absolute z-10 m-8  '/>
            <input type='text' placeholder='Enter your email address' className='relative text-slate-400 rounded-3xl h-[48px] w-[349px] mt-5 pl-16 font-normal text-[16px]'/>
            </div>
            <input type='text' placeholder='Subscribe to Newsletter' className='text-[#000000] text-center rounded-3xl h-[48px] w-[349px] mt-3 font-medium text-[16px]'/>
        </div>
    </div>
  )
}

export default FooterLast