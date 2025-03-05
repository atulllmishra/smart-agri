"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import backgroundImage from  "../../../../public/image1/Agriculture.jpg";
import Image from "next/image";
import bgPic from "../../../../public/image1/Agriculture.jpg";

export default function page() {
  const [crop, setCrop] = useState("");
  const [state, setState] = useState("");
  const [priceData, setPriceData] = useState(null);
  const [error, setError] = useState(null);

  const onClick = async (e) => {
    e.preventDefault();
    console.log(crop);
    console.log(state);
    try {
      const response = await axios.get(
        `https://impacthack.onrender.com/fetch_price?crop_name=${crop}&state=${state}`
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
    <div style={{
            backgroundImage: `url(${bgPic.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",
          }}
          className="min-h-screen flex items-center justify-center bg-gray-100 " >
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
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
              <h2 className="text-lg font-semibold">{priceData.title}</h2>
              <p className="text-gray-700">{priceData.details}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
