"use client";

import PrimNavbar from "@/app/components/primNavbar";
import UserNavbar from "@/app/components/userNavbar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

function RegisterShop() {
  //validating if the token is there
  const [token, setToken] = useState(false);

  //store user email
  const [email, setEmail] = useState("");

  //store user id from decoded token
  const [id, setId] = useState();

  //store shopName
  const [ShopName, setShopName] = useState("");

  //store username
  const [userName, setUserName] = useState("");

  //store password
  const [password, setPassword] = useState("");

  const URL = "http://localhost:4500/shop/registershop";

  const DATA = {
    id,
    ShopName,
    email,
    userName,
    password,
  };

  console.log("The data is:", DATA);

  useEffect(() => {
    const aT = localStorage.getItem("accessToken");
    if (aT) {
      setToken(true);
      try {
        const decoded = jwtDecode(aT);
        console.log("The jwt token is:", decoded);

        // console.log("The user id:", decoded.userId);

        setId(decoded.userId);
      } catch (error) {
        console.log("Error Happened:", error);
      }
    } else {
      console.log("No accessToken found in localStorage");
    }
  }, []);

  function handleRegister() {
    axios.post(URL, DATA).then((resp) => {
      alert(resp.data);
    });
  }

  return (
    <>
      {token ? <UserNavbar /> : <PrimNavbar />}
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <div className="bg-white border-2 border-red-600 shadow-lg p-8 rounded-lg w-full max-w-md mt-28">
          <h4 className="font-extrabold text-center text-2xl mb-4">
            Register Your Shop
          </h4>
          <h6 className="font-bold text-red-500 text-center mb-6">
            Become a Trader
          </h6>

          <div className="border border-gray-300 p-4 rounded-lg bg-gray-100 mb-6">
            <p className="text-sm font-semibold text-gray-600">
              Note: Your user account will be automatically created when
              registering your shop if you don’t have one. Login to your account
              and start trading goods :)
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="shopName"
                className="block font-semibold text-md mb-1"
              >
                Shop Name
              </label>
              <input
                type="text"
                id="shopName"
                value={ShopName}
                onChange={(event) => setShopName(event.target.value)}
                className="bg-gray-200 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-semibold"
                placeholder="Enter shop name"
              />
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block font-semibold text-md mb-1"
              >
                UserName
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                className="bg-gray-200 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-semibold"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-md mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="bg-gray-200 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-semibold"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-semibold text-md mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="bg-gray-200 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-semibold"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-red-500 text-white font-semibold w-full py-2 rounded-lg hover:bg-red-600 transition duration-200"
                type="submit"
                onClick={handleRegister}
              >
                Register Shop
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterShop;
