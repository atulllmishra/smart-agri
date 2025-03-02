"use client";

import React from "react";
import search from "../../../public/icons/magnifying-glass.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Signup from "@/app/(Authentication)/signup/page.jsx"
import Link from "next/link";

export default function Header() {

  const router = useRouter();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if(value) {
      router.push(value);
    }
  }
  
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="flex justify-evenly items-center w-full">
        <div className="container flex items-center justify-around p-2">
          <div>Logo</div>
          <div className="w-full flex justify-center items-center">
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
          <div className="">
            <select name="" onChange={handleSelectChange} id="" className="text-black font-bold">
              <option value="/login">Login</option>
              <option value="/signup">Signup</option>
            </select>
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
