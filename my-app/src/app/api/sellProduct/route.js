import { dbConnect } from "@/db/dbConfig";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  console.log("Reached sellProduct route");

  return dbConnect()
    .then(async () => {
      const reqBody = await request.json();
      console.log("reqBody", reqBody);
      const { productName, price, quantity, imageUrl, category, farmer, location, description } = reqBody;

      // Create new product
      const newProduct = new Product({
        productName,
        price,
        quantity,
        imageUrl,
        category,
        farmer,
        location,
        description,
      });

      const savedProduct = await newProduct.save();

      return NextResponse.json(
        { message: "Product created successfully", product: savedProduct },
        { status: 201 }
      );
    })
    .catch((error) => {
      console.log("Database connection error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    });
}