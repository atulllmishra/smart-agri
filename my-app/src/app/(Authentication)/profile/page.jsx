"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import profileDefault from "../../../../public/icons/profileSkelton.png";

export default function page() {
  const router = useRouter();
  const [user, setUser] = React.useState(null);
  const [isSeller, setIsSeller] = React.useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/userData"); // API call to fetch user data
        setUser(res.data.data);
        if(res.data.data.role === "seller") {
          setIsSeller(true);
        }
        console.log("User Data:", res.data);
        console.log("User Data:", user);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white text-center px-10 py-10">
      <div className="container border border-black rounded-lg shadow-lg p-6 w-96 bg-white">
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <Image
            src={"" || profileDefault} // Default avatar if missing
            width={100}
            height={100}
            alt="Profile Picture"
            className="rounded-full border-2 border-green-500"
          />
        </div>

        {/* User Details */}
        <h1 className="text-2xl font-bold text-green-700">{"Your Name"}</h1>
        <p className="text-gray-600">@{user?.userName || "username"}</p>
        <p className="text-gray-500 mt-2">{user?.email || "Your Email"}</p>
        <p className="text-gray-500">{user?.phone || "Your Phone Number"}</p>
        <p className="text-gray-500">
          {user?.location
            ? `${user.location}, ${user.pinCode}`
            : "Location not provided"}
        </p>
        <p className="text-gray-700 font-semibold mt-3">
          Role: <span className="text-green-600">{user?.role}</span>
        </p>

        {/* Logout Button */}
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={logout}
            className="bg-red-500 w-72 hover:bg-red-700 text-white px-4 py-2 mt-4 rounded-md transition"
          >
            Logout
          </button>
          <button
            onClick={logout}
            className="bg-blue-500 w-72 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded-md transition"
          >
            Update
          </button>
        </div>
          {isSeller ? <button
            onClick={(e) => router.push("/sellerDashboard")}
            className="bg-green-500 w-full hover:bg-green-700 text-white px-4 py-2 mt-4 rounded-md transition"
          >
            Seller Dashboard
          </button> : null}
      </div>
    </div>
  );
}
