import React from "react";
import Image from "next/image";
import mails from "../../public/mail.png";

const FooterLast = () => {
  return (

      <div className="w-[1240px] h-[190px] absolute z-10 ml-[110px] flex justify-around items-center bg-black rounded-[20px] m-auto">
        <div className="">
          <h1 className="text-white font-bold text-[40px] w-[551px] ">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>
        <div className="mb-5">
          <div className="text-center ">
            <Image
              alt="mail"
              src={mails}
              className="h-[24px] w-[24px] absolute z-10 m-8  "
            />
            <input
              type="text"
              placeholder="Enter your email address"
              className="relative text-slate-400 rounded-3xl h-[48px] w-[419px] mt-5 pl-16 font-normal text-[16px]"
            />
          </div>
          <input
            type="text"
            placeholder="Subscribe to Newsletter"
            className="text-black text-center rounded-3xl h-[48px] w-[419px] mt-3 font-medium text-[16px]"
          />
        </div>
      </div>

  );
};

export default FooterLast;
