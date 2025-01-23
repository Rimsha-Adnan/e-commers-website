import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";



export async function GET(req:Request,
    context : {params : Promise<{id : string}>}
) {
    const { id } =  await context.params;
    try {
        const query = `*[_type == "products" && _id == $id][0]{
           _id,
           category,
           name,
           price,
           image,
           isNew,
           imageOne,
           colors,
           sizes,
           description,

        }`;
        const product = await client.fetch(query, { id });
        if(!product){
            return NextResponse.json({error: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product);
    }catch (error) {
        console.error("Error fetch poduct:", error);
        return NextResponse.json({ error: "Internal server error"}, { status: 500});
    }
}