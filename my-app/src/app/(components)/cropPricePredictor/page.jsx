"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import bgPic from "../../../../public/image1/Agriculture.jpg";

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
    <div
      style={{
        backgroundImage: `url(${bgPic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Price Predictor
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
              placeholder="Use Pascal Convention"
              type="text"
              name="crop"
              id="crop"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              required
              className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>
        {/* <div>
          {priceData ? (
            <div>
              <h2 className="text-lg font-semibold">{priceData.crop_name}</h2>
              <p className="text-gray-700">{priceData.predicted_price}</p>
            </div>
          ) : (
            <p className="text-gray-500">
            </p>
            
          )}
        </div> */}
        <div className="overflow-x-auto  bg-white">
        {priceData ? (
          <table className="min-w-full border my-5 border-green-600">
            <thead>
              <tr className="bg-green-600">
                <th className="border px-4 py-2 text-left">Crop Name</th>
                <th className="border  px-4 py-2 text-left">Predicted Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-black px-4 py-2">{priceData.crop_name}</td>
                <td className="border text-black px-4 py-2">
                  {priceData.predicted_price}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </div>
      </div>
      
    </div>
  );
}
