"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function page() {
//   const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId"); // Get productId from query
  const [product, setProduct] = useState(null);

useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      console.log(productId);
      
      const res = await await axios.get(`/api/productOrder/${productId}`) // API route to fetch product;
      setProduct(res.data.data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Confirm Purchase</h1>
      <div className="border p-4 rounded-md shadow-md mt-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">Price: ₹{product.price}</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
