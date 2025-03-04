import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900 mt-4 pt-4 border-b-2 border-green-300 max-h-fit w-full text-wrap flex flex-col justify-around">
      <div className="container py-3 px-16 text-white font-serif font-semibold">
        <h1 className="border-b-2 w-48 border-white">Get In Touch With Us</h1>
        <div className="flex justify-between py-4">
          <p className="text-sm font-normal">
            <b>Address:</b>
            <br />
            MCAET Campus Akbarpur,
            Ambedkar Nagar, 
            <br />
            UP 224122
            India
          </p>

          <div className="text-sm font-normal">
            <b>Contact:</b>
            <br />
            phone: +91 97959 30369
            <br />
            Email: nikhilkumarsharman815@gmail.com
            <div />
          </div>
        </div>
      </div>
      <div className=" bg-gray-800 w-full py-4 text-white flex text-center place-content-center justify-center font-serif font-semibold">
        <div className="flex justify-center items-center text-center font-normal text-sm gap-5">
          <h1>
            <Link href="/home">Home</Link>
          </h1>
          |
          <h1>
            <Link href="/aboutus">About Us</Link>
          </h1>
          |
          <h1>
            <Link href="/contactus">Contact Us</Link>
          </h1>
          |
          <h1>
            <Link href="/services">Services</Link>
          </h1>
          |
          <h1>
            <Link href="/faq">FAQ</Link>
          </h1>
        </div>
      </div>
      <div className="bg-gray-950 p-2 text-sm text-white text-center">Copyright &copy; 2025 AnnyaBazar. All rights rserved | Designed & Developed by <b>Soft Sculptures</b></div>
    </div>
  );
}
