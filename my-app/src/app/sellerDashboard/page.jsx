"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function page() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/farmerProducts");
      console.log(response.data.data);
      setProducts(response.data.data);
      
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch products.");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/deleteProduct/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="w-full flex flex-col p-5 bg-white justify-center items-center">
      <h1 className="font-bold text-black text-2xl">Seller Dashboard</h1>
      <div className="w-2/3 mt-5 flex flex-col text-center justify-center items-center gap-5">
        <p className="text-lg text-balance-text text-black">
          Welcome to your Dashboard, designed to simplify farm management and enhance productivity. This all-in-one platform provides you with real-time weather updates, crop tracking, and soil health monitoring to help you make informed decisions every step of the way. Easily track the growth stages of your crops and receive personalized tips for optimal planting, irrigation, and harvesting times. The dashboard also offers market price trends, so you can stay ahead of the competition and get the best value for your produce. With alerts and notifications, you'll never miss important updates like weather changes or pest risks. Additionally, the dashboard features data analytics to help you track farm performance, identify growth opportunities, and plan for future seasons. Whether you’re a small-scale farmer or managing a large farm, this tool is designed to support your success, sustainability, and long-term profitability, all in one user-friendly interface.
        </p>
        <button
          onClick={(e) => router.push("/sellForm")}
          className="bg-green-600 px-3 py-2 w-20 text-white rounded-md"
        >
          Sell
        </button>
      </div>

      <section>
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold text-black mb-4 flex text-center">Your Products</h2>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border border-solid border-green-200">
                <thead className="bg-green-600">
                  <tr className="">
                    <th className="border text-black px-4 py-2">Product Name</th>
                    <th className="border text-black px-4 py-2">Category</th>
                    <th className="border text-black px-4 py-2">Description</th>
                    <th className="border text-black px-4 py-2">Location</th>
                    <th className="border text-black px-4 py-2">Quantity</th>
                    <th className="border text-black px-4 py-2">Price</th>
                    <th className="border text-black px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="text-center">
                      <td className="border text-black px-4 py-2">{product.productName}</td>
                      <td className="border text-black px-4 py-2">{product.category}</td>
                      <td className="border text-black px-4 py-2">{product.description}</td>
                      <td className="border text-black px-4 py-2">{product.location}</td>
                      <td className="border text-black px-4 py-2">{product.quantity}</td>
                      <td className="border text-black px-4 py-2">₹{product.price}</td>
                      <td className="border text-black px-4 py-2">
                        <button
                          // onClick={() => deleteProduct(product._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => alert("Edit function here")}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
