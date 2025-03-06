"use client";

import React, {useState, useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [farmer, setFarmer] = React.useState(null)
  const [product, setProduct] = React.useState({
    productName: "",
    price: "",
    quantity: "",
    imageUrl: "",
    category: "",
    farmer: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/userData"); // API call to fetch user data
        setFarmer(res.data.data);
        // Set the farmer ID in the product state
        setProduct((prevProduct) => ({
          ...prevProduct,
          farmer: res.data.data?._id || "",
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/sellProduct", product);
      console.log("sell response", response.data);
      router.push('/sellerDashboard');
    } catch (error) {
      console.error("sell error", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          {loading ? "Loading..." : "Submit Product"}
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={product.productName}
              onChange={(e) =>
                setProduct({ ...product, productName: e.target.value })
              }
              required
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Price Input */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              required
              className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Quantity Input */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
              required
              className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Image URL Input */}
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={product.imageUrl}
              onChange={(e) =>
                setProduct({ ...product, imageUrl: e.target.value })
              }
              className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Farmer Input */}
          <div>
            <label
              htmlFor="farmer"
              className="block text-sm font-medium text-gray-700"
            >
              Farmer
            </label>
            <input
              type="text"
              name="farmer"
              id="farmer"
              value={farmer?.userName || ""}
              readOnly
              // onChange={(e) =>
              //   setProduct({ ...product, farmer: farmer?.userName || "" })
              // }
              required
              className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Location Input */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={product.location}
              onChange={(e) =>
                setProduct({ ...product, location: e.target.value })
              }
              required
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Category Selection Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={"product.category"}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option className="text-black" value="">Select a category</option>
              <option className="text-black" value="crop">Crop</option>
              <option className="text-black" value="fruit">Fruit</option>
              <option className="text-black" value="vegetable">Vegetable</option>
              <option className="text-black" value="grain">Grain</option>
              <option className="text-black" value="seed">Seed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
