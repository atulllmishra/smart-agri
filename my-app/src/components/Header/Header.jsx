"use client";

import React, { useEffect, useState } from "react";
import search from "../../../public/icons/magnifying-glass.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login status on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await axios.get("/api/status"); // Make sure this API exists
        
        setIsLoggedIn(res.data.isLoggedIn);
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  // ✅ Handle Logout
  const handleLogout = async () => {
    try {
      await axios.get("/api/logout"); // Calls API to remove session token
      setIsLoggedIn(false);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="flex justify-evenly items-center w-full">
        <div className="container flex items-center justify-around p-2">
          <div>Logo</div>
          <div className="flex justify-center items-center">
            <input
              className="h-auto w-96 p-2 border border-green-600 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Search Here..."
            />
            <Image
              src={search}
              className="w-10 h-10 bg-green-600 rounded-sm p-1"
              alt="Search"
            />
          </div>
          <div>
            {isLoggedIn ? (
              <div className="flex gap-4">
                <Link href="/profile" className="text-black font-bold">
                  Visit Profile
                </Link>
                <button onClick={handleLogout} className="text-red-600 font-bold">
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="w-full bg-green-600">
        <div className="w-1/2 flex items-center justify-around text-white py-3">
          {["Home", "Sell", "Buy", "Services", "About Us", "Terms & Services", "Contact", "FAQ"].map((item, index) => (
            <h1 key={index} className="font-poppins">
              <Link href="/">{item}</Link>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
