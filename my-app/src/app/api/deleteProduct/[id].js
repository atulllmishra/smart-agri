import { dbConnect } from "@/db/dbConfig";
import Product from "@/models/productModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  try {
    await dbConnect();
    const { id } = req.query();
    console.log("Received ID:", id);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid Product ID format" },
        { status: 400 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }
    const product = await Product.findById();
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // const deleteProduct = await Product.findOne({_id: id});
    // if(!deleteProduct) {
    //     return NextResponse.json({error: "Product not found"}, {status: 404})
    // }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
