// "use client";
// import React, { useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import Link from 'next/link';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// type GivingTypes = {
//     _id: string;
//     name: string;
//     image: string;
//     price: number;
//     discountPercent: number;
//     isNew: boolean;
//   }; 
// const Pagination =  () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPages = 10;
//     const goToNextPage = () => {
//         if (currentPage < totalPages) {
//           setCurrentPage((prevPage) => prevPage + 1);
//         }
//       };
    
//       const goToPreviousPage = () => {
//         if (currentPage > 1) {
//           setCurrentPage((prevPage) => prevPage - 1);
//         }
//       };
    
//       const goToPage = (page: number) => {
//         setCurrentPage(page);
//       };
//       const query = `
//         *[_type == "products"]{ _id, name, image, price, discountPercent, isNew  }[8..16]
//         `;
//         const items = await client.fetch(query);
//   return (
//     <div id='pagination'>
//       <div className="flex flex-col items-center">
//       {/* Images Section */}
//       <div className="flex  flex-wrap md:justify-center gap-8">
//             {items.map((item: GivingTypes) => (
//               <div
//                 key={item._id}
//                 className="h-auto md:w-[295px] justify-center items-center  flex flex-col "
//               >
//                 <Link href={`/products/${item._id}`}>
//                   <Image
//                     src={urlFor(item.image).url()}
//                     alt={item.name}
//                     width={295}
//                     height={298}
//                     className="rounded-lg"
//                   />
//                 </Link>
//                 <h1 className="font-semibold text-lg mt-4">{item.name}</h1>
//                 {/* <div className="flex gap-4 items-center mt-1">
//                   <Image
//                     alt={""}
//                     src={item.img2}
//                     width={100}
//                     height={100}
//                     className="bg-transparent"
//                   />
//                   <p className="text-gray-600">{item.para}</p>
//                 </div> */}
//                 <div className="flex gap-3 items-center">
//                   <h4 className="">{item.isNew}</h4>
//                   <h4 className="font-bold text-xl mt-1">${item.price}</h4>

//                   <h4 className="rounded-3xl h-[30px] w-[65px] text-red-600 mt-1  flex justify-center items-center font-medium">
//                     {item.discountPercent}%
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>

//       {/* Pagination Section */}
//       <div className="flex flex-wrap justify-center items-center border-t-2 border-slate-200 m-5 md:m-10">
//         <button
//           onClick={goToPreviousPage}
//           className={`border px-4 py-2 ${
//             currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToPage(index + 1)}
//             className={`border px-4 py-2 ${
//               currentPage === index + 1 ? "bg-blue-500 text-white" : ""
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           onClick={goToNextPage}
//           className={`border px-4 py-2 ${
//             currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Pagination
"use client";
import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

type GivingTypes = {
  _id: string;
  name: string;
  image: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<GivingTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const totalPages = 10;

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "products"]{ _id, name, image, price, discountPercent, isNew }[${
          (currentPage - 1) * 8
        }..${currentPage * 8 - 1}]`;
        const fetchedItems = await client.fetch(query);
        setItems(fetchedItems);
      } catch {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id="pagination">
      <div className="flex flex-col items-center">
        {/* Images Section */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="flex flex-wrap md:justify-center gap-8">
            {items.map((item: GivingTypes) => (
              <div
                key={item._id}
                className="h-auto md:w-[295px] justify-center items-center flex flex-col"
              >
                <Link href={`/products/${item._id}`}>
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={295}
                    height={298}
                    className="rounded-lg"
                  />
                </Link>
                <h1 className="font-semibold text-lg mt-4">{item.name}</h1>
                <div className="flex gap-3 items-center">
                  <h4 className="">{item.isNew}</h4>
                  <h4 className="font-bold text-xl mt-1">${item.price}</h4>
                  <h4 className="rounded-3xl h-[30px] w-[65px] text-red-600 mt-1 flex justify-center items-center font-medium">
                    {item.discountPercent}%
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Section */}
        <div className="flex flex-wrap justify-center items-center border-t-2 border-slate-200 m-5 md:m-10">
          <button
            onClick={goToPreviousPage}
            className={`border px-4 py-2 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`border px-4 py-2 ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            className={`border px-4 py-2 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
