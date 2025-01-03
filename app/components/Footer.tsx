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
    <div className="relative h-[60vh] bg-[#F0F0F0]">
  {/* First Div - Newsletter Subscription Section */}
  {/* <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 z-20 w-full max-w-[1240px] h-auto flex flex-col md:flex-row justify-around items-center bg-black rounded-[20px]  pb-6  px-6 md:px-0">
    <div className="mb-6 md:mb-0 text-center md:text-left">
      <h1 className="text-white font-bold text-[24px] md:text-[40px] w-full md:w-[551px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
    </div>
    <div className="w-full md:w-auto mb-5">
      <div className="relative text-center">
        <Image
          alt="mail"
          src={mails}
          className="h-[24px] w-[24px] absolute z-10 top-1/2 left-4 transform -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Enter your email address"
          className="text-slate-400 rounded-3xl h-[48px] w-full max-w-[419px] pl-16 font-normal text-[16px] mt-4 focus:outline-none"
        />
      </div>
      <button className="text-black text-center rounded-3xl h-[48px] w-full max-w-[419px] bg-gray-200 font-medium text-[16px] mt-3">
        Subscribe to Newsletter
      </button>
    </div>
  </div> */}

  {/* Second Div - Footer Section */}
  <div className="relative z-10  pt-[120px]  px-6 md:px-[110px]">
    <div className="flex flex-wrap justify-between items-start gap-28 space-y-8 md:space-y-0">
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
        </ul>
      </div>
      {/* Footer Links */}
      {[
        { title: "COMPANY",
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
          className="w-1/2   md:w-auto mb-6 md:mb-0 flex flex-col gap-5 "
        >
          <h3 className="font-medium text-[16px]">{section.title}</h3>
          <ul className="text-[#919090] font-normal text-[16px]  space-y-2 ">
            {section.items.map((item, idx) => (
              <li className="" key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t-2 border-slate-400 pt-6  flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
      <p className="font-normal text-[14px]">
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
