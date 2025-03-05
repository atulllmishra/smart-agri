import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import Product from "@/models/productModel";
import { dbConnect } from "@/db/dbConfig";

export async function GET(request) {
    try {
        await dbConnect();

        const farmerData = getDataFromToken(request)
        const farmer = await User.findOne({ _id: farmerData.id }).select("-password");
        if (!farmer) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        const products = await Product.find({ farmer: farmer._id })
        // console.log(products)
        // console.log(farmer)

        if(!products) {
            return NextResponse.json({error: "No products found"}, {status: 404})
        }

        return NextResponse.json({
            message: "Products found",
            data: products
        });
    } catch (error) {
        console.log("Error fetching product data:", error);
        return NextResponse.json({ error: error.message }, { status: 500})
    }
}