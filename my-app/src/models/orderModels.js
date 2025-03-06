import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
  paymentStatus: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("ordesr", OrderSchema);

export default Order;
