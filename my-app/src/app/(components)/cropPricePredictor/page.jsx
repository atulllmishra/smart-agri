"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function page() {
  const [crop, setCrop] = useState("");
  const [priceData, setPriceData] = useState(null);
  const [error, setError] = useState(null);

  const onClick = async (e) => {
    e.preventDefault();
    console.log(crop);
    // console.log(state);
    try {
      const response = await axios.get(
        `https://price-predictor-model.onrender.com/predict_price?crop_name=${crop}`
      );
      setPriceData(response.data);

      console.log("Crop Price Data:", response.data);
      //   console.log(); 
    } catch (error) {
      console.error("Error fetching crop price:", error);
      setError("Failed to fetch price. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Search
        </h1>
        <form onSubmit={onClick} className="space-y-4">
          <div>
            <label
              htmlFor="crop"
              className="block text-sm font-medium text-gray-700"
            >
              Crop
            </label>
            <input
              type="text"
              name="crop"
              id="crop"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>
        <div>
          {priceData ? (
            <div>
              <h2 className="text-lg font-semibold">{priceData.crop_name}</h2>
              <p className="text-gray-700">{priceData.predicted_price}</p>
            </div>
          ) : (
            <p className="text-gray-500">
              Enter crop and state to fetch price.
            </p>
            
          )}
        </div>
      </div>
    </div>
  );
}
