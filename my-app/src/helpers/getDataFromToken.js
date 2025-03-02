import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    console.log("Reached here");
    try {
        const token = request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({isLoggedIn: false, user: null});
        }

        const data = jwt.verify(token, process.env.SECRET_KEY);
        return NextResponse.json({isLoggedIn: true, user: data});
    } catch (error) {
        throw new Error(error.message);
    }
}