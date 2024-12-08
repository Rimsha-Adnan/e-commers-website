import React from 'react';
import Image from 'next/image';
import face from "../../public/facebok.png";
import insta from "../../public/Insta.png";
import twitter from "../../public/twitte.png";
import github from "../../public/git.png";
import visa from "../../public/visa.png";
import bage1 from "../../public/Badge (1).png";
import bage2 from "../../public/Badge (2).png";
import bage3 from "../../public/Badge (3).png";
import bage4 from "../../public/Badge (4).png";


const Footer = () => {
  return (
    // <div className='  h-[499px] bg-[#F0F0F0] '>
    //     <div className='h-[177px] pl-[90px] pt-[220px] flex justify-between items-center whitespace-nowrap'>
    //         <div className='w-[248px] h-[177px] space-y-4'>
    //             <h1 className='font-bold text-[33.45px]'>SHOP.CO</h1>
    //             <p className='font-normal text-[14px] text-[#919090]'>We have clothes that suits your style and<br/> 
    //             which you’re proud to wear. From<br/> 
    //             women to men.</p>
    //             <ul className='flex pt-3 space-x-3'>
    //                 <li><Image alt="twiter" src={twitter} className='h-[28px] w-[28px]'/></li>
    //                 <li><Image alt="facebook" src={face} className='h-[28px] w-[28px]'/></li>
    //                 <li><Image alt="insta" src={insta} className='h-[28px] w-[28px]'/></li>
    //                 <li><Image alt="github" src={github} className='h-[28px] w-[28px]'/></li>
    //             </ul>
    //         </div>
    //         <div className='h-[177px] w-[104px] space-y-4'>
    //             <h3 className='font-medium text-[16px]'>COMPANY</h3>
    //             <ul className='text-[#919090] font-normal text-[16px] space-y-4'>
    //                 <li>About</li>
    //                 <li>Features</li>
    //                 <li>Works</li>
    //                 <li>Career</li>
    //             </ul>
    //         </div>
    //         <div className='h-[177px] w-[136px] space-y-4'>
    //             <h3 className='font-medium text-[16px]'>HELP</h3>
    //             <ul className='text-[#919090] font-normal text-[16px] space-y-4'>
    //                 <li>Customer Support</li>
    //                 <li>Delivery Details</li>
    //                 <li>Terms & Conditions</li>
    //                 <li>Privacy Policy</li>
    //             </ul>
    //         </div>
    //         <div className='w-[149px] h-[177px] space-y-4'>
    //             <h3 className='font-medium text-[16px]'>FAQ</h3>
    //             <ul className='text-[#919090] font-normal text-[16px] space-y-4'>
    //                 <li>Account</li>
    //                 <li>Manage Deliveries</li>
    //                 <li>Orders</li>
    //                 <li>Payments</li>
    //             </ul>
    //         </div>
    //         <div className='h-[177px] w-[149px] mr-32 space-y-4 '>
    //             <h3 className='font-medium text-[16px]'>RESOURCES</h3>
    //             <ul className='text-[#919090] font-normal text-[16px] space-y-4'>
    //                 <li>Free eBooks</li>
    //                 <li>Development Tutorial</li>
    //                 <li>How to - Blog</li>
    //                 <li>Youtube Playlist</li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div  className='flex whitespace-nowrap border-t-2 w-[1330px] items-center justify-between ml-[90px] mt-36 space-y-7 border-slate-400 '> 
    //         <p className="font-normal text-[14px]">Shop.co © 2000-2023, All Rights Reserved</p>
    //         <ul className='flex'>
    //             <li><Image alt='logo' src={visa} height={40} width={60} /></li>
    //             <li><Image alt='logo' src={bage1} height={40} width={60} /></li>
    //             <li><Image alt='logo' src={bage2} height={40} width={60} /></li>
    //             <li><Image alt='logo' src={bage3} height={40} width={60} /></li>
    //             <li><Image alt='logo' src={bage4} height={40} width={60} /></li>
    //         </ul>
    //     </div>
    // </div>
    <div className="bg-[#F0F0F0]">
  <div className="flex justify-between items-start flex-wrap md:flex-nowrap px-4 lg:px-[90px] pt-[190px]">
    <div className="w-full md:w-auto space-y-3 mb-8 md:mb-0">
      <h1 className="font-bold text-2xl md:text-[33.45px]">SHOP.CO</h1>
      <p className="font-normal text-sm md:text-[14px] text-[#919090]">
        We have clothes that suit your style and
        <br />
        which you’re proud to wear. From
        <br />
        women to men.
      </p>
      <ul className="flex space-x-3">
        <li>
          <Image alt="twitter" src={twitter} className="h-7 w-7 md:h-[28px] md:w-[28px]" />
        </li>
        <li>
          <Image alt="facebook" src={face} className="h-7 w-7 md:h-[28px] md:w-[28px]" />
        </li>
        <li>
          <Image alt="insta" src={insta} className="h-7 w-7 md:h-[28px] md:w-[28px]" />
        </li>
        <li>
          <Image alt="github" src={github} className="h-7 w-7 md:h-[28px] md:w-[28px]" />
        </li>
      </ul>
    </div>

    <div className="w-auto  mb-12 md:mb-0 space-y-4">
      <h3 className="font-medium text-[16px]">COMPANY</h3>
      <ul className="text-[#919090] font-normal text-[14px] md:text-[16px] space-y-4">
        <li>About</li>
        <li>Features</li>
        <li>Works</li>
        <li>Career</li>
      </ul>
    </div>

    <div className="w-auto mb-12 md:mb-0 space-y-4">
      <h3 className="font-medium text-[16px]">HELP</h3>
      <ul className="text-[#919090] font-normal text-[14px] md:text-[16px] space-y-4">
        <li>Customer Support</li>
        <li>Delivery Details</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div className="w-auto mb-12 md:mb-0 space-y-4">
      <h3 className="font-medium text-[16px]">FAQ</h3>
      <ul className="text-[#919090] font-normal text-[14px] md:text-[16px] space-y-4">
        <li>Account</li>
        <li>Manage Deliveries</li>
        <li>Orders</li>
        <li>Payments</li>
      </ul>
    </div>

    <div className="w-auto mb-12 md:mb-0 space-y-4">
      <h3 className="font-medium text-[16px]">RESOURCES</h3>
      <ul className="text-[#919090] font-normal text-[14px] md:text-[16px] space-y-4">
        <li>Free eBooks</li>
        <li>Development Tutorial</li>
        <li>How to - Blog</li>
        <li>YouTube Playlist</li>
      </ul>
    </div>
  </div>

  <div className="border-t-2 border-slate-400 flex flex-col md:flex-row justify-between items-center px-4 lg:px-[90px] py-6">
    <p className="font-normal text-sm md:text-[14px] text-center md:text-left">
      Shop.co © 2000-2023, All Rights Reserved
    </p>
    <ul className="flex mt-4 md:mt-0 space-x-4">
      <li>
        <Image alt="logo" src={visa} height={40} width={60} />
      </li>
      <li>
        <Image alt="logo" src={bage1} height={40} width={60} />
      </li>
      <li>
        <Image alt="logo" src={bage2} height={40} width={60} />
      </li>
      <li>
        <Image alt="logo" src={bage3} height={40} width={60} />
      </li>
      <li>
        <Image alt="logo" src={bage4} height={40} width={60} />
      </li>
    </ul>
  </div>
</div>

  )
}

export default Footer

