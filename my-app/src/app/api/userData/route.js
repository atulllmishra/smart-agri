import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { dbConnect } from "@/db/dbConfig";

export async function GET(request) {

    return dbConnect()
    .then(async () => {
        const data = await getDataFromToken(request);
        const user = await User.findOne(({_id: data._id})).select('-password');
        return NextResponse.json({
            message: "User data fetched successfully",
            data: user
        });
    })
    .catch((error) => {
        return NextResponse.json({ error: error.message }, { status: 500 });
    });
}