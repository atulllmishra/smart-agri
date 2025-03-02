import React from "react";
import search from "../../../public/icons/magnifying-glass.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="bg-white text-wrap">
      <div className="flex justify-evenly items-center w-full">
        <div className="container flex items-center pt-2px pb-2px h-16 pl-4">
          <Image src={search} className="w-9 h-9 flex items-center bg-white" alt=""></Image>
          <input className="flex justify-center h-auto w-96 p-2 border border-green-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            placeholder=" Search Here..."
          />
          <div className="items-right pl-16">
            <select name="" id="" className="text-black font-bold">
              <option value="">Login/SignUp as Seller</option>
              <option value="">Login/SignUp as Buyer</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-green-300 h-12 w-full text-wrap">
        <div className="container flex items-center justify-between pl-4 pr-4 pt-2">
          <div className="flex items-center">
            <div className="flex items-center">
              <h1 className="text-white font-bold">Smart Agri</h1>
            </div>
          </div>
          <div className="flex items-center justify-around text-black ">
            <div className="flex items-center pl-4 pr-4 ">
              <h1 className=" font-bold"><a href="home.html">Home</a></h1>
            </div>
            <div className="flex items-center pl-4 pr-4">
              <h1 className="font-bold"><Link href="/aboutus">About Us</Link></h1>
            </div>
            <div className="flex items-center pl-4 pr-4">
              <h1 className="font-bold"><Link href="/contactus">Contact Us</Link></h1>
            </div>
            <div className="flex items-center pl-4 pr-4">
              <h1 className="font-bold"><a href="services.html">Services</a></h1>
            </div>
            <div className="flex items-center pl-4 pr-4">
              <h1 className="font-bold"><a href="faq.html">FAQ</a></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
