import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

let isConnected = false; // To prevent multiple connections

export async function dbConnect() {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const connection = await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("Database connected successfully", connection.connection.host);
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
}
