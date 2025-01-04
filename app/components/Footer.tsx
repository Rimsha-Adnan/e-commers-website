import React from "react";
import Image from "next/image";
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
    <div className="h-auto md:h-[60vh] bg-[#F0F0F0]">


 
  {/* <div className="relative z-10  pt-[120px]  px-6 md:px-[110px]">
    <div className="flex flex-wrap justify-between items-start gap-28 space-y-8 md:space-y-0">
      {/* Shop.co Section */}
      {/* <div className="w-full md:w-auto md:flex-1 space-y-4"> */}
        {/* <h1 className="font-bold text-[24px] md:text-[33.45px]">SHOP.CO</h1>
        <p className="font-normal text-[14px] text-[#919090]">
          We have clothes that suit your style and
          <br />
          which you’re proud to wear. From
          <br />
          women to men.
        </p>
        <ul className="flex space-x-3 py-4 ">
          <li>
            <Image
              alt="twitter"
              src={twitter}
              className="h-[28px] w-[28px]"
            />
          </li>
          <li>
            <Image
              alt="facebook"
              src={face}
              className="h-[28px] w-[28px]"
            />
          </li>
          <li>
            <Image
              alt="insta"
              src={insta}
              className="h-[28px] w-[28px]"
            />
          </li>
          <li>
            <Image
              alt="github"
              src={github}
              className="h-[28px] w-[28px]"
            />
          </li>
        </ul> */}
      {/* </div> */}
      {/* Footer Links */}
       {/* {[ */}
         {/* { title: "COMPANY", */}
  {/* //          items: ["About", "Features", "Works", "Career"],
  //          },
  //       { */}
  {/* //         title: "HELP",
  //         items: [
  //           "Customer Support",
  //           "Delivery Details",
  //           "Terms & Conditions",
  //           "Privacy Policy",
  //         ],
  //       },
  //       {
  //         title: "FAQ",
  //         items: ["Account", "Manage Deliveries", "Orders", "Payments"],
  //       },
  //       {
  //         title: "RESOURCES",
  //         items: [
  //           "Free eBooks",
  //           "Development Tutorial",
  //           "How to - Blog",
  //           "Youtube Playlist",
  //         ],
  //       },
  //     ].map((section, index) => ( */}
  {/* //       <div
  //         key={index}
  //         className="w-1/2   md:w-auto mb-6 md:mb-0 flex md:flex-col  gap-5 "
  //       >
  //         <h3 className="font-medium text-[16px]">{section.title}</h3>
  //         <ul className="text-[#919090] font-normal text-[16px]  space-y-2 ">
  //           {section.items.map((item, idx) => (
  //             <li className="" key={idx}>{item}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     ))}
  //   </div>
  //   <div className="border-t-2 border-slate-400 pt-6  flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
  //     <p className="font-normal text-[14px]">
  //       Shop.co © 2000-2023, All Rights Reserved
  //     </p>
  //     <ul className="flex space-x-3">
  //       {[visa, bage1, bage2, bage3, bage4].map((logo, idx) => (
  //         <li key={idx}>
  //           <Image alt="logo" src={logo} height={40} width={60} />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // </div> */} 
  <div className="relative z-10 pt-[120px] px-6 md:px-[110px]">
  <div className="flex flex-wrap justify-between items-start gap-6 md:gap-28">
    {/* Shop.co Section */}
    <div className="w-full md:w-auto md:flex-1 space-y-4">
      <h1 className="font-bold text-[24px] md:text-[33.45px]">SHOP.CO</h1>
      <p className="font-normal text-[14px] text-[#919090]">
        We have clothes that suit your style and
        <br />
        which you’re proud to wear. From
        <br />
        women to men.
      </p>
      <ul className="flex space-x-3 py-4">
        <li>
          <Image alt="twitter" src={twitter} className="h-[28px] w-[28px]" />
        </li>
        <li>
          <Image alt="facebook" src={face} className="h-[28px] w-[28px]" />
        </li>
        <li>
          <Image alt="insta" src={insta} className="h-[28px] w-[28px]" />
        </li>
        <li>
          <Image alt="github" src={github} className="h-[28px] w-[28px]" />
        </li>
      </ul>
    </div>
    {/* Footer Links */}
    {[
      {
        title: "COMPANY",
        items: ["About", "Features", "Works", "Career"],
      },
      {
        title: "HELP",
        items: [
          "Customer Support",
          "Delivery Details",
          "Terms & Conditions",
          "Privacy Policy",
        ],
      },
      {
        title: "FAQ",
        items: ["Account", "Manage Deliveries", "Orders", "Payments"],
      },
      {
        title: "RESOURCES",
        items: [
          "Free eBooks",
          "Development Tutorial",
          "How to - Blog",
          "Youtube Playlist",
        ],
      },
    ].map((section, index) => (
      <div
        key={index}
        className="w-1/2 sm:w-[48%] md:w-auto mb-6 md:mb-0 flex-cols-2 md:flex-cols-4 md:gap-5"
      >
        <h3 className="font-medium text-[16px]">{section.title}</h3>
        <ul className="text-[#919090] font-normal text-[16px] space-y-2">
          {section.items.map((item, idx) => (
            <li className="" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  <div className="border-t-2 border-slate-400 pt-6 flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
    <p className="font-normal text-[14px] text-center w-full sm:w-auto">
      Shop.co © 2000-2023, All Rights Reserved
    </p>
    <ul className="flex space-x-3">
      {[visa, bage1, bage2, bage3, bage4].map((logo, idx) => (
        <li key={idx}>
          <Image alt="logo" src={logo} height={40} width={60} />
        </li>
      ))}
    </ul>
  </div>
</div>

</div>

  );
};

export default Footer;
