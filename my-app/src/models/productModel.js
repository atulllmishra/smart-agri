const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageUrl: { type: String, default: "" },
  category: { type: String, required: true }, // e.g., Vegetables, Fruits, Grains
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true },
  description: { type: String },
  aiSuggestedPrice: { type: Number }, // AI-based price prediction
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
