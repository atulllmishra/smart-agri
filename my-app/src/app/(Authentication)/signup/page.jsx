"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { sign } from "jsonwebtoken";
import Image from "next/image";
import bgPic from "../../../../public/image1/Agriculture.jpg"

function page() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    userName: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
   
  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.userName.length > 0){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const [loading, setLoading] = React.useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log("signup user", user);
    try {
      setLoading(true);
      const response = await axios.post("/api/signup", user);
      console.log("signup response", response.data);
      router.push("/login");
    } catch (error) {
      console.log("signup error", error);      
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div style={{ backgroundImage: `url(${bgPic.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh'}} className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          {loading ? "Loading..." : "Sign Up"}
        </h1>
        <form onSubmit={onSignUp} className="space-y-4">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Role Selection Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
