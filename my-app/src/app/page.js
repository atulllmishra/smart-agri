"use client";
import Image from "next/image";
import search from "../../public/image1/agri.jpg";
import deal from "../../public/icons/deal.png";
import predictive from "../../public/icons/predictive.png";
import rts from "../../public/icons/rts.png";
import chatbot from "../../public/icons/chatbot.png"
import Link from "next/link";
import React from "react";
import axios from "axios";
import productimage from "../../public/productimage/watermelon.webp";
export default function Home() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.data);
        // console.log("response", response.data);
        // console.log("products image", products.data.imageUrl);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // Ensure products is properly accessed
  console.log("Products:", products);
  console.log("image url", products.imageUrl);
  
  products.forEach((product, index) => {
    console.log(`Product ${index + 1} Image:`, product.imageUrl);
  });

  return (
    <div className="w-full relative bg-white">
      <div className="w-full">
        <Image
          src={search}
          alt="agri"
          className="w-full h-screen opacity-100"
        />
      </div>
      <div id="productSection" className="absolute top-96 left-1/3 transform -translate-x-1/2 -translate-y-1/2 px-10 py-6 mx-12 bg-black opacity-85 rounded-sm">
        <div className="">
          <p className="text-2xl font-bold text-green-300">
            Welcome to Annyabazar
          </p>
          <p className=" font-bold text-white mb-4">
            Your Ultimate Agricultural Products Trading Platform !!
          </p>
          <p className="text-white ">
            At AnyaBazaar, we are committed to changing the way farmers,
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
        </div>
      </div>

      <section className="w-full bg-white my-2 flex flex-col px-32">
        <h1 className="text-3xl font-bold text-center text-black py-5">
          Products
        </h1>
        <div className="grid grid-cols-4 gap-1 place-items-center">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="flex flex-col border-2 border-slate-400 p-2 shadow-lg"
              >
                <div className="flex flex-col items-center border-2 w-56">
                  {/* <Image
                    src={product.imageUrl || productimage}
                    width={160}
                    height={160}
                    alt={product.productName}
                    className="w-40 h-40"
                  /> */}
                  <div
                    style={{
                      backgroundImage: `url(${product.imageUrl})`,
                      width: "220px",
                      height: "160px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="w-full flex flex-row justify-between my-2">
                  <div className="flex flex-col text-xs gap-1">
                    <p className="font-bold text-black">Product Name</p>
                    <p className="font-bold text-gray-500">
                      Quantity Available
                    </p>
                    <p className="font-bold text-gray-500">Unit Price</p>
                    <p className="font-bold text-gray-500">Upload Time</p>
                  </div>
                  <div className="flex flex-col text-xs gap-1">
                    <p className="font-bold text-black">
                      {product.productName}
                    </p>
                    <p className="font-bold text-gray-500">
                      {product.quantity} {product.unit || "Kg"}
                    </p>
                    <p className="font-bold text-gray-500">
                      {product.price} INR
                    </p>
                    <p className="font-bold text-gray-500">
                      {new Date(product.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="bg-yellow-300 shadow-lg font-semibold text-black text-xs px-3 py-1 my-1">
                    Buy Now
                  </button>
                  <div className="font-semibold text-black text-xs px-3 py-1 my-1">
                    Rated: {product.rating || "N/A"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              Loading Products...
            </p>
          )}
        </div>
      </section>

      <section className="w-full bg-gray-100 mt-10 pb-8 flex flex-col px-28">
        <h1 className="text-3xl text-green-800 font-bold text-center py-5">
          Our Services
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-2 place-items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src={deal} alt="deal" width={120} height={120} />
            <h3 className="font-bold text-black mt-2 text-lg">
              Agricultural Marketplace
            </h3>
            <p className="text-center text-xs font-semibold text-gray-500">
              Buy and sell agricultural products directly from farmers and
              retailers. No middlemen, no hidden costs.
            </p>
            <button className="bg-green-700 mt-4 text-white font-semibold px-3 py-1 my-1 rounded-sm">
            <Link href='#productSection'>Explore</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src={predictive} alt="predictive" width={120} height={120} />
            <h3 className="font-bold text-black mt-2 text-lg">
              Price Forecasting
            </h3>
            <p className="text-center text-xs font-semibold text-gray-500">
              Buy and sell agricultural products directly from farmers and
              retailers. No middlemen, no hidden costs.
            </p>
            <button className="bg-green-700 mt-4 text-white font-semibold px-3 py-1 my-1 rounded-sm">
              <Link href='/cropPricePredictor'>Explore</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src={rts} alt="deal" width={120} height={120} />
            <h3 className="font-bold mt-2 text-black text-lg">
              Real Time Price Checker
            </h3>
            <p className="text-center text-xs font-semibold text-gray-500">
              Buy and sell agricultural products directly from farmers and
              retailers. No middlemen, no hidden costs.
            </p>
            <button className="bg-green-700 mt-4  text-white font-semibold px-3 py-1 my-1 rounded-sm">
            <Link href='/cropPriceChecker'>Explore</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src={chatbot} alt="deal" width={120} height={120} />
            <h3 className="font-bold mt-2 text-black text-lg">
              AI Powered Chatbot
            </h3>
            <p className="text-center text-xs font-semibold text-gray-500">
              Buy and sell agricultural products directly from farmers and
              retailers. No middlemen, no hidden costs.
            </p>
            <button className="bg-green-700 mt-4 text-white font-semibold px-3 py-1 my-1 rounded-sm">
              Explore
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
