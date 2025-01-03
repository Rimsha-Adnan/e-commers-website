// import React from "react";
// import { IoMailOpenOutline } from "react-icons/io5";

// const FooterLast = () => {
//   return (

//       <div className="md:w-[1240px] w-auto h-[190px] relative top-24 z-10  ml-[110px] flex justify-around items-center mt-20 bg-black rounded-[20px] m-auto">
//         <div className="">
//           <h1 className="text-white font-bold text-[40px] w-[551px] ">
//             STAY UPTO DATE ABOUT OUR LATEST OFFERS
//           </h1>
//         </div>
//         <div className="mb-5 space-y-3">
//           <div className="h-[58px] w-[519px] mb-4 "> 
//             <IoMailOpenOutline  className="absolute left-[709px] top-14 transform  text-4xl-translate-y-1/2  z-10 text-slate-400"/>
            
//            <input
//               type="text"
//               placeholder="Enter your email address"
//               className="relative text-slate-400 rounded-3xl h-[48px] w-[419px] mt-5 pl-16 font-normal text-[16px]"
//             />
         
//           </div>
//           <div>

//           <input
//             type="text"
//             placeholder="Subscribe to Newsletter"
//             className="text-black text-center rounded-3xl h-[48px] w-[419px] mt-3 font-medium text-[16px]"
//           />
//           </div>
//         </div>

        
//       </div>

//   );
// };

// export default FooterLast;

import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";

const FooterLast = () => {
  return (
    <div className="lg:w-[1240px] w-auto h-auto md:h-[190px] relative top-24 z-10 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center mt-20 bg-black rounded-[20px] p-4">
      <div className="text-center md:text-left mb-6 md:mb-0 px-2">
        <h1 className="text-white font-bold text-[24px] md:text-[32px] lg:text-[40px] w-full md:w-[551px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="space-y-4 w-full md:w-auto px-2">
        <div className="relative">
          <IoMailOpenOutline className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-2xl md:text-2xl lg:text-2xl z-10 text-slate-400" />
          <input
            type="text"
            placeholder="Enter your email address"
            className="text-slate-400 rounded-3xl  h-[48px] w-full  md:w-auto lg:w-[419px] pl-12 font-normal text-[14px] md:text-[16px] lg:text-[18px]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subscribe to Newsletter"
            className="text-black text-center rounded-3xl h-[48px]  w-full  md:w-auto lg:w-[419px] font-medium text-[14px] md:text-[16px] lg:text-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterLast;

