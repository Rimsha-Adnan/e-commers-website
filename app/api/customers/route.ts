// pages/api/submitCustomerInfo.js
import client from '@/sanityClient'; 
import { NextResponse } from 'next/server';
 


export  async function POST(req: Request, ) {
    const data = await req.json();
    const {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        postalCode,
        country,
    } = data;

    // Check if required fields are missing
    if (!firstName || !lastName || !phone || !email || !address || !city || !postalCode || !country) {
      return  NextResponse.json(
        { error: "Missing required shipment details (from, to, weight, dimensions)." },
        { status: 400 }
    );
    }

    try {
      const doc = {
        _type: 'customer',
        firstName,
        lastName,
        phone,
        email,
        address,
        city,
        postalCode,
        country,
      };

      // Create the customer document in Sanity
      const result = await client.create(doc);

      // Respond with success if the document is created successfully
      return NextResponse.json({
        message: 'Customer information saved successfully',
        data: result,
      });
    } catch (error) {
      console.error(error);
      return  NextResponse.json(
        { error: "Failed to save customer information" },
        { status: 500 }
      )
    }

}