import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig";
import Product from "@/models/productModel";

export async function GET() {
    try {
        await dbConnect();
        const products = await Product.find();
        return NextResponse.json({
            message: "Products fetched successfully",
            data: products,
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}