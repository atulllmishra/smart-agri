import { dbConnect } from "@/db/dbConfig.js";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

dbConnect();

export async function post(request) {
  try {
    const reqBody = await request.json();
    const { username, fullName, email, password, role } = reqBody;

    //Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create new user
    const newUser = new User({
      username,
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
      savedUser
    );

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
