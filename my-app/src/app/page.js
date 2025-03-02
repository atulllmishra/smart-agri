"use client";
import Image from "next/image";
import search from "../../public/image1/agri.jpg";
import React from "react";
import productimage from "../../public/productimage/watermelon.webp";
export default function Home() {


  return (
    <div className="w-full h-screen relative">
      <div className="w-full">
        <Image
          src={search}
          alt="agri"
          className="w-full h-screen opacity-100"
        />
      </div>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 px-10 py-6 mx-12 bg-black opacity-85 rounded-sm">
        <div className="">
          <p className="text-2xl font-bold text-green-300">
            Welcome to Annyabazar
          </p>
          <p className=" font-bold text-white mb-4">
            Your Ultimate Agricultural Products Trading Platform !!
          </p>
          <p className="text-white ">
            At FasalMandi, we are committed to changing the way farmers,
            suppliers and buyers connect and do business in agriculture. Our
            platform allows small business owners to buy fresh produce directly
            from farmers and farmers to sell their produce directly to
            retailers, eliminating the middleman and keeping prices fair.
          </p>
          <p className="text-white my-3">
            Join us in building the future of Indian agriculture. Explore our
            online store where you can buy and sell products, buy wholesale and
            be part of a large network of retailers-farmers.
          </p>

          <button className="bg-green-500 text-white px-4 py-2 my-5 rounded-md">
            Join Now
          </button>
        </div>
      </div>

      <section className="w-full bg-white flex flex-col">
        <h1 className="text-3xl font-bold text-center py-5">Our Products</h1>
        <div className="grid grid-rows-3 place-items-center gap-8">
          <div className="grid grid-cols-4 gap-5">
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
            <div className="flex flex-col border-2 border-slate-400  border-solid p-2">
              <div className="flex flex-col items-center border-2 w-56">
                <Image src={productimage} className="w-40 h-40" alt="product" />
              </div>
              <div className="w-full flex flex-row justify-between my-2">
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Product Name</p>
                  <p className="font-bold text-gray-500">Quantity Availabe</p>
                  <p className="font-bold text-gray-500">Unit price</p>
                  <p className="font-bold text-gray-500">Upload Time</p>
                </div>
                <div className="flex flex-col text-xs gap-1">
                  <p className="font-bold">Watermelon</p>
                  <p className="font-bold text-gray-500">50 crt</p>
                  <p className="font-bold text-gray-500">250 INR</p>
                  <p className="font-bold text-gray-500">2025-03-02</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-yellow-300 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Buy Now
                </button>
                <div className="bg-green-600 text-black text-xs px-3 py-1  my-1 rounded-md">
                  Rated: 4/5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
