import { verify } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed before saving
  role: { type: String, enum: ["farmer", "buyer"], required: true },
  phone: { type: String },
  location: { type: String, required: true },
  pinCode: { type: Number, required: true },
  profileImage: { type: String, default: "" }, // Cloudinary or local storage
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
