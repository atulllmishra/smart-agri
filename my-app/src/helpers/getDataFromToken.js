import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value;
        if (!token) {
            // return NextResponse.json({isLoggedIn: false, user: null});
            return null;
        }

        const data = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Decoded Token Data:", data);
        // return NextResponse.json({isLoggedIn: true, user: data});
        return data;
    } catch (error) {
        // throw new Error(error.message);
        console.error("Token verification failed:", error);
        return null; 
    }
}