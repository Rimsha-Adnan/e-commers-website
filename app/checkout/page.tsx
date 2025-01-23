// // "use client";

// // import React, { useState } from "react";

// // const CheckoutPage = () => {
// //   const [formValues, setFormValues] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     city: "",
// //     postalCode: "",
// //     country: "",
// //   });

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormValues((prevValues) => ({
// //       ...prevValues,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log("Form Values:", formValues);
// //   };

// //   return (
// //     <div className="px-4 md:px-10 lg:px-24">
// //       <div className="flex flex-col mt-7">
// //         <h2 className="font-extrabold text-[30px] md:text-[40px] text-center md:text-left">
// //           CHECKOUT
// //         </h2>
// //         <div className="flex flex-col md:flex-row mt-9 gap-6 md:gap-9">
// //           {/* Left Side - Billing Details */}
// //           <div className="w-full md:w-[715px] border-gray-100 rounded-2xl border-2 p-4 md:p-6 flex flex-col gap-6">
// //             <h3 className="font-bold text-[20px] md:text-[24px]">Billing Details</h3>
// //             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
// //               <div className="flex flex-col md:flex-row gap-4">
// //                 <input
// //                   type="text"
// //                   name="firstName"
// //                   placeholder="First Name"
// //                   value={formValues.firstName}
// //                   onChange={handleInputChange}
// //                   className="w-full md:w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //                 />
// //                 <input
// //                   type="text"
// //                   name="lastName"
// //                   placeholder="Last Name"
// //                   value={formValues.lastName}
// //                   onChange={handleInputChange}
// //                   className="w-full md:w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //                 />
// //               </div>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={formValues.email}
// //                 onChange={handleInputChange}
// //                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //               />
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 value={formValues.phone}
// //                 onChange={handleInputChange}
// //                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //               />
// //               <input
// //                 type="text"
// //                 name="address"
// //                 placeholder="Address"
// //                 value={formValues.address}
// //                 onChange={handleInputChange}
// //                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //               />
// //               <div className="flex flex-col md:flex-row gap-4">
// //                 <input
// //                   type="text"
// //                   name="city"
// //                   placeholder="City"
// //                   value={formValues.city}
// //                   onChange={handleInputChange}
// //                   className="w-full md:w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //                 />
// //                 <input
// //                   type="text"
// //                   name="postalCode"
// //                   placeholder="Postal Code"
// //                   value={formValues.postalCode}
// //                   onChange={handleInputChange}
// //                   className="w-full md:w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //                 />
// //               </div>
// //               <input
// //                 type="text"
// //                 name="country"
// //                 placeholder="Country"
// //                 value={formValues.country}
// //                 onChange={handleInputChange}
// //                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
// //               />
// //               <button
// //                 type="submit"
// //                 className="w-full h-[48px] bg-black text-white font-bold text-[16px] rounded-3xl mt-4"
// //               >
// //                 Submit
// //               </button>
// //             </form>
// //           </div>

// //           {/* Right Side - Order Summary */}
// //           <div className="w-full md:w-[505px] border-gray-100 rounded-2xl border-2 p-4 md:p-6 flex flex-col gap-6">
// //             <h3 className="font-bold text-[20px] md:text-[24px]">Order Summary</h3>
// //             <div className="flex flex-col gap-4 border-b-2 border-gray-100 pb-4">
// //               <div className="flex justify-between">
// //                 <p>Subtotal</p>
// //                 <p>$240</p>
// //               </div>
// //               <div className="flex justify-between">
// //                 <p>Discount (-20%)</p>
// //                 <p>-$48</p>
// //               </div>
// //               <div className="flex justify-between">
// //                 <p>Delivery Fee</p>
// //                 <p>$15</p>
// //               </div>
// //             </div>
// //             <div className="flex justify-between font-bold text-[18px]">
// //               <p>Total</p>
// //               <p>$207</p>
// //             </div>
// //             <button className="w-full h-[60px] bg-black text-white font-bold text-[16px] rounded-3xl mt-4">
// //               Place Order
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;
// "use client";

// import React, { useState } from "react";
// import { useCart } from "../components/CartContext";

// const CheckoutPage = () => {
//     const {  getTotalPrice } = useCart();
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//   });

//   const [errors, setErrors] = useState<{
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//     address: string;
//     city: string;
//     postalCode: string;
//     country: string;
//   }>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//   });

//   const validateForm = () => {
//     const newErrors: typeof errors = {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         address: "",
//         city: "",
//         postalCode: "",
//         country: "",
//       };

//     if (!formValues.firstName.trim()) newErrors.firstName = "First name is required.";
//     if (!formValues.lastName.trim()) newErrors.lastName = "Last name is required.";
//     if (!formValues.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
//       newErrors.email = "Enter a valid email address.";
//     }
//     if (!formValues.phone.trim()) {
//       newErrors.phone = "Phone number is required.";
//     } else if (!/^\d{10}$/.test(formValues.phone)) {
//       newErrors.phone = "Enter a valid 10-digit phone number.";
//     }
//     if (!formValues.address.trim()) newErrors.address = "Address is required.";
//     if (!formValues.city.trim()) newErrors.city = "City is required.";
//     if (!formValues.postalCode.trim()) {
//       newErrors.postalCode = "Postal code is required.";
//     } else if (!/^\d{5}$/.test(formValues.postalCode)) {
//       newErrors.postalCode = "Enter a valid 5-digit postal code.";
//     }
//     if (!formValues.country.trim()) newErrors.country = "Country is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
//   const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:3000/api/customers', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formValues),
//     });

//     const data = await response.json();
//     console.log("data", data);

//     if (response.ok) {
//         setSuccess(data.message);
//         setError(null);
//     } else {
//         setError(data.error);
//         setSuccess(null);
//     }
//   };

//   return (
//     <div className="px-4 md:px-10 lg:px-24">
//       <div className="flex flex-col mt-7">
//         <h2 className="font-extrabold text-[30px] md:text-[40px] text-center md:text-left">
//           CHECKOUT
//         </h2>
//         <div className="flex flex-col md:flex-row mt-9 gap-6 md:gap-9">
//           {/* Left Side - Billing Details */}
//           <div className="w-full md:w-[715px] border-gray-100 rounded-2xl border-2 p-4 md:p-6 flex flex-col gap-6">
//             <h3 className="font-bold text-[20px] md:text-[24px]">Billing Details</h3>
//             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="w-full md:w-1/2">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formValues.firstName}
//                     onChange={handleInputChange}
//                     className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
//                   />
//                   {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
//                 </div>
//                 <div className="w-full md:w-1/2">
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formValues.lastName}
//                     onChange={handleInputChange}
//                     className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
//                   />
//                   {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

//                 </div>
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formValues.email}
//                   onChange={handleInputChange}
//                   className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.email ? "border-red-500" : "border-gray-300"}`}
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formValues.phone}
//                   onChange={handleInputChange}
//                   className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.phone ? "border-red-500" : "border-gray-300"}`}
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   value={formValues.address}
//                   onChange={handleInputChange}
//                   className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.address ? "border-red-500" : "border-gray-300"}`}
//                 />
//                 {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//               </div>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="w-full md:w-1/2">
//                   <input
//                     type="text"
//                     name="city"
//                     placeholder="City"
//                     value={formValues.city}
//                     onChange={handleInputChange}
//                     className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.city ? "border-red-500" : "border-gray-300"}`}
//                   />
//                   {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
//                 </div>
//                 <div className="w-full md:w-1/2">
//                   <input
//                     type="text"
//                     name="postalCode"
//                     placeholder="Postal Code"
//                     value={formValues.postalCode}
//                     onChange={handleInputChange}
//                     className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.postalCode ? "border-red-500" : "border-gray-300"}`}
//                   />
//                   {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
//                 </div>
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="country"
//                   placeholder="Country"
//                   value={formValues.country}
//                   onChange={handleInputChange}
//                   className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.country ? "border-red-500" : "border-gray-300"}`}
//                 />
//                 {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full h-[48px] bg-black text-white font-bold text-[16px] rounded-3xl mt-4"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Right Side - Order Summary */}
//           <div className="w-full md:w-[505px] border-gray-100 rounded-2xl border-2 p-4 md:p-6 flex flex-col gap-6">
//             <h3 className="font-bold text-[20px] md:text-[24px]">Order Summary</h3>
//             <div className="flex flex-col gap-4 border-b-2 border-gray-100 pb-4">
//               <div className="flex justify-between">
//                 <p>Subtotal</p>
//                 <p>${getTotalPrice()}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>Discount (-20%)</p>
//                 <p>-$48</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>Delivery Fee</p>
//                 <p>$15</p>
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <p>Total</p>
//               <p>${getTotalPrice()}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
"use client";

import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { z } from "zod";
type FormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};
const CheckoutPage = () => {
  const { getTotalPrice } = useCart();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // Zod validation schema
  const validationSchema = z.object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    email: z.string().email("Enter a valid email address."),
    phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number."),
    address: z.string().min(1, "Address is required."),
    city: z.string().min(1, "City is required."),
    postalCode: z
      .string()
      .regex(/^\d{5}$/, "Enter a valid 5-digit postal code."),
    country: z.string().min(1, "Country is required."),
  });

  const validateForm = () => {
    try {
      validationSchema.parse(formValues);
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
      });
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce((acc: FormErrors, curr) => {
          const field = curr.path[0] as keyof FormErrors;
          acc[field] = curr.message; // Assign error message to the corresponding field
          return acc;
        }, {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          postalCode: "",
          country: "",
        });
      
        setErrors(newErrors); // Pass the properly initialized object to setErrors
      }
      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   const response = await fetch("http://localhost:3000/api/customers", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formValues),
  //   });

  //   const data = await response.json();
  //   console.log("data", data);

  //   if (response.ok) {
  //     setSuccess(data.message);
  //     setError(null);
  //   } else {
  //     setError(data.error);
  //     setSuccess(null);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await fetch("http://localhost:3000/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    const data = await response.json();
    console.log("data", data);

    if (response.ok) {
      setSuccess(data.message); // Set the success message
      setError(null); // Clear the error message
    } else {
      setError(data.error); // Set the error message
      setSuccess(null); // Clear the success message
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-24">
      <div className="flex flex-col mt-7">
        <h2 className="font-extrabold text-[30px] md:text-[40px] text-center md:text-left">
          CHECKOUT
        </h2>
        <div className="flex flex-col md:flex-row mt-9 gap-6 md:gap-9">
          {/* Left Side - Billing Details */}
          <div className="w-full md:w-[715px] border-gray-100 rounded-2xl border-2 p-4 md:p-6 flex flex-col gap-6">
            <h3 className="font-bold text-[20px] md:text-[24px]">
              Billing Details
            </h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.address ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formValues.city}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.city ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formValues.postalCode}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.postalCode ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm">{errors.postalCode}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formValues.country}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black ${errors.country ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.country && (
                  <p className="text-red-500 text-sm">{errors.country}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-[48px] bg-black text-white font-bold text-[16px] rounded-3xl mt-4"
              >
                Submit
              </button>
              {success && <p className="success-message">{success}</p>}
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-full md:w-[505px] border-gray-100 rounded-2xl border-2 p-4 md:p-6 flex flex-col gap-6">
            <h3 className="font-bold text-[20px] md:text-[24px]">
              Order Summary
            </h3>
            <div className="flex flex-col gap-4 border-b-2 border-gray-100 pb-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${getTotalPrice()}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount (-20%)</p>
                <p>-$48</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>$15</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>${getTotalPrice()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
