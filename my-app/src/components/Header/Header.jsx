"use client";

import React, {useEffect, useState} from "react";
import search from "../../../public/icons/magnifying-glass.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Signup from "@/app/(Authentication)/signup/page.jsx";
import Link from "next/link";
import axios from "axios";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export default function Header() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await axios.get("/api/status");
        setIsLoggedIn(res.data.isLoggedIn);
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/logout"); // Calls API to remove session token
      setIsLoggedIn(false);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      router.push(value);
    }
  };

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="flex justify-evenly items-center w-full">
        <div className="container flex items-center justify-around p-2">
          <div>Logo</div>
          <div className="flex justify-center items-center">
            <input
              className="flex justify-center h-auto w-96 p-2 border border-green-600 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 "
              type="text"
              placeholder=" Search Here..."
            />
            <Image
              src={search}
              className="w-10 h-10 flex items-center bg-green-600 rounded-sm p-1"
              alt=""
            ></Image>
          </div>
          <div>
            {isLoggedIn ? (
              <div className="w-full flex gap-4">
                <Link href="/profile" className="text-black font-bold">
                  Visit Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <select
                onChange={(e) => router.push(e.target.value)}
                className="text-black font-bold"
              >
                <option value="/login">Login</option>
                <option value="/signup">Signup</option>
              </select>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-green-600 place-items-center justify-center m-auto">
        <div className="w-1/2 flex items-center justify-around text-white py-3">
          <h1 className="font-poppins">
            <Link href="/">Home</Link>
          </h1>
          <h1 className="font-poppins">
            <Link href="/">Sell</Link>
          </h1>
          <h1 className="font-poppins">
            <Link href="/">Buy</Link>
          </h1>
          <h1 className="font-poppins">
            <Link href="/">Services</Link>
          </h1>
          <h1 className="font-poppins">
            <Link href="/">About Us</Link>
          </h1>
          <h1 className="font-poppins">
            <Link href="/">Terms & Services</Link>
          </h1>
          <h1 className="font-poppins">
            <Link href="/">Contact</Link>
          </h1>
          <h1 className="font-poppins">
            <Link href="/">FAQ</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
