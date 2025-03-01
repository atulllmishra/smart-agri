import { dbConnect } from "@/db/dbConfig.js";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Suspense } from "react";

export async function POST(request) {
  console.log("Reached login route");

  return dbConnect()
    .then(async () => {
      const reqBody = await request.json();
      const { email, password } = reqBody;
      console.log("reqBody", reqBody);

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 400 }
        );
      }

      // Check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 400 }
        );
      }

      //create token data
      const tokenData = {
        id: user._id,
        userName: user.userName,
        email: user.email,
      }

      // Create token
      const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });

      const response = NextResponse.json({
        message: "Login successful",
        success: true,
      });
      
      response.headers.set(
        "Set-Cookie",
        `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`
      );      

      return response;
    })
    .catch((error) => {
      console.log("Database connection error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    });
}
