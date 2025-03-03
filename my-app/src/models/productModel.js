import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageUrl: { type: String, default: "" },
  category: { type: String, required: true }, // e.g., Vegetables, Fruits, Grains
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true },
  description: { type: String },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;