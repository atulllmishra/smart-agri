import { dbConnect } from "@/db/dbConfig.js";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  console.log("Reached signup route");

  return dbConnect()
    .then(async () => {
      const reqBody = await request.json();
      console.log("reqBody", reqBody);
      const { userName, email, password } = reqBody;

      // Check if user already exists
      const user = await User.findOne({ email });
      if (user) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 }
        );
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      const newUser = new User({
        userName,
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      return NextResponse.json(
        { message: "User created successfully", user: savedUser },
        { status: 201 }
      );
    })
    .catch((error) => {
      console.log("Database connection error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    });
}
