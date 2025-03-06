"use client";
import React from "react";

export default function page() {
  return (
   
    <div className="bg-white py-20">
       <div className="grid bg-white grid-cols-2 justify-around border-2 border-solid border-black  mx-36">
      <div className="w-full  p-2">
        <iframe
          className="w-full h-full border-0 border-solid border-black"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8934904221774!2d82.4905798756474!3d26.45916197692045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399093cbf6ffffff%3A0xe886e928b8f0a1e7!2sMahamaya%20College%20of%20Agricultural%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1740846653007!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full  p-2">
        <h1 className="font-bold text-xl text-black mb-2">Contact Us: </h1>
        <p className="text-black">
          <b>Phone:</b> 1234567890
        </p>
          <p className="text-black">
            <b>Email:</b>{"  "}softsculpture@gmail.com
          </p>
        <div className="flex gap-2 text-black">
          <p>
            <b>Address:</b> Mahamaya College of Agricultural Engineering And
            Technology, Akbarpur
            <br />
          </p>
        </div>
        <div className="flex gap-2 text-black">
          <p>Uttar Pradesh (224122)
          </p>
        </div>
        <br />
        <hr />
      </div>
    </div>
    </div>
  );
}
