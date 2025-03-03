"use client";
import Image from "next/image";
import search from "../../public/image1/agri.jpg";
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
        console.log("response", response.data);
        // console.log("products image", products.data.imageUrl);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // Ensure products is properly accessed
  console.log("Products:", products);
  products.forEach((product, index) => {
    console.log(`Product ${index + 1} Image:`, product.imageUrl);
  });

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
        <h1 className="text-3xl font-bold text-center py-5">Products</h1>
        <div className="grid grid-cols-4 gap-5 place-items-center">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="flex flex-col border-2 border-slate-400 p-2"
              >
                <div className="flex flex-col items-center border-2 w-56">
                  <Image
                    src={productimage} 
                    width={160}
                    height={160}
                    alt={product.productName}
                    className="w-40 h-40"
                  />
                </div>
                <div className="w-full flex flex-row justify-between my-2">
                  <div className="flex flex-col text-xs gap-1">
                    <p className="font-bold">Product Name</p>
                    <p className="font-bold text-gray-500">
                      Quantity Available
                    </p>
                    <p className="font-bold text-gray-500">Unit Price</p>
                    <p className="font-bold text-gray-500">Upload Time</p>
                  </div>
                  <div className="flex flex-col text-xs gap-1">
                    <p className="font-bold">{product.productName}</p>
                    <p className="font-bold text-gray-500">
                      {product.quantity} {product.unit}
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
                  <button className="bg-yellow-300 text-black text-xs px-3 py-1 my-1 rounded-md">
                    Buy Now
                  </button>
                  <div className="bg-green-600 text-black text-xs px-3 py-1 my-1 rounded-md">
                    Rated: {product.rating || "N/A"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No products available
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
