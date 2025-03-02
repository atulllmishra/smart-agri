import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { dbConnect } from "@/db/dbConfig";

export async function GET(request) {

    try {
        await dbConnect(); // Ensure database connection

        const userData = getDataFromToken(request); // Now it returns raw decoded token
        // console.log("User Data:", userData);

        const user = await User.findOne({ _id: userData.id }).select("-password");
        // console.log("Check User:", user);
        
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "User data fetched successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}