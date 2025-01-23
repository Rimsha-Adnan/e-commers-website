// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// export async function GET(req: Request) {
//     const {searchParams} = new URL(req.url);
//     const category = searchParams.get("category") || "all";
//     const search = searchParams.get("search") || "";

//     let query;
//     let params = {};
//     if (search){
//         query = `*[_type == "products" && name match $search + "*"]{
//            _id,
//            category,
//            name,
//            price,
//            image,
//            isNew,
//            imageOne,
//         }`;
//         params = { search };
//     } else if ( category === "all"){
//         query = `*[_type == "products"] {
//            _id,
//            category,
//            name,
//            price,
//            image,
//            isNew,
//            imageOne,
//         }`;
//     } else {
//         query = `*[_type == "products" && category == $category]{
//             _id,
//            category,
//            name,
//            price,
//            image,
//            isNew,
//            imageOne,
//         }`;
//         params = { category };
//     }
//     try {
//         const data = await client.fetch(query, params);
//         return NextResponse.json({ success: true, data});
//     }catch (error){
//         console.error("Sanity fetch error:", error);
//         return NextResponse.json({ success: false,error: "Failed  to fetch data"}, { status: 500})
//     }

// }
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";

  let query: string;
  let params: Record<string, string> = {}; // Strongly type params as a Record of strings

  if (search) {
    query = `*[_type == "products" && name match $search + "*"]{
      _id,
      category,
      name,
      price,
      image,
      isNew,
      imageOne
    }`;
    params = { search };
  } else if (category === "all") {
    query = `*[_type == "products"]{
      _id,
      category,
      name,
      price,
      image,
      isNew,
      imageOne
    }`;
  } else {
    query = `*[_type == "products" && category == $category]{
      _id,
      category,
      name,
      price,
      image,
      isNew,
      imageOne
    }`;
    params = { category };
  }

  try {
    const data = await client.fetch(query, params);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
