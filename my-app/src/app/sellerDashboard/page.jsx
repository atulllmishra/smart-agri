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
    <div className="w-full flex flex-col p-5 justify-center items-center">
      <h1 className="font-bold text-2xl">Seller Dashboard</h1>
      <div className="w-2/3 mt-5 flex flex-col text-center justify-center items-center gap-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          voluptates explicabo tempora, itaque iusto adipisci voluptas quam
          autem. Sint assumenda iure magnam reprehenderit animi aperiam vero non
          rem recusandae id dolore, laborum quasi suscipit soluta debitis,
          doloremque cupiditate natus vitae laboriosam, unde distinctio
          molestias. Impedit quo accusantium non voluptates recusandae suscipit
          reiciendis dolores illum eveniet, obcaecati totam a. Cupiditate beatae
          quae unde.
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
          <h2 className="text-2xl font-bold mb-4 flex text-center">Your Products</h2>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Product Name</th>
                    <th className="border px-4 py-2">Category</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Location</th>
                    <th className="border px-4 py-2">Quantity</th>
                    <th className="border px-4 py-2">Price</th>
                    <th className="border px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="text-center">
                      <td className="border px-4 py-2">{product.productName}</td>
                      <td className="border px-4 py-2">{product.category}</td>
                      <td className="border px-4 py-2">{product.description}</td>
                      <td className="border px-4 py-2">{product.location}</td>
                      <td className="border px-4 py-2">₹{product.quantity}</td>
                      <td className="border px-4 py-2">₹{product.price}</td>
                      <td className="border px-4 py-2">
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
