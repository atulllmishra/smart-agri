import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import Product from "@/models/productModel";
import { dbConnect } from "@/db/dbConfig";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    console.log("Received ID:", id);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid Product ID format" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
        { error: "Failed to Add Product" },
        { status: 500 }
      );
  }
}
