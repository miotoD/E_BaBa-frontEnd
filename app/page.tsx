"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Midsec from "./Pages/Homepage/Midsec";
import Lowersec from "./Pages/Homepage/Lowersec";
import Footer from "./components/Footer";
import RegisterShop from "./Pages/Registershop/page";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const accesstoken = localStorage.getItem("accessToken"); //retriving accessToken and storing it in at variable
    setToken(accesstoken);
  }, []);

  const handleLogout = async () => {
    await localStorage.removeItem("accessToken");
    window.location.reload();
    alert("loggedOut.");
  };

  return (
    <>
      <div className="main-container h-screen w-screen bg-white">
        <div className="relative h-[560px] bg-red-600">
          <img
            src="/mac.avif"
            alt="Image 1"
            className="absolute inset-0 h-full w-full object-cover animate-fade-image-1"
          />
          <img
            src="/food.png"
            alt="Image 1"
            className="absolute inset-0 h-full w-full object-cover animate-fade-image-2"
          />
          <img
            src="/wardrobe.webp"
            alt="Image 1"
            className="absolute inset-0 h-full w-full object-cover animate-fade-image-3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="header-section relative z-10 p-8 text-white grid grid-cols-12 grid-rows-[100px,100px,50px,100px,70px] ">
            <h1 className="text-3xl font-bold text-yellow-400 col-start-1 col-span-2 px-4 hover:animate-bounce hover:cursor-pointer">
              E-BaBa
            </h1>

            <div className="List p-1 col-start-5 col-span-4 ">
              <ul className="flex gap-24">
                <li className="text-gray-50 font-bold hover:text-red-500 hover:cursor-pointer hover:animate-pulse">
                  Home
                </li>
                <Link href="/Pages/Shop" className=" no-underline text-current">
                  <li className="text-gray-50 font-bold hover:text-red-500 hover:cursor-pointer hover:animate-pulse">
                    Shop
                  </li>
                </Link>
                <li className="text-gray-50 font-bold hover:text-red-500 hover:cursor-pointer hover:animate-pulse">
                  About Us
                </li>
              </ul>
            </div>

            {token ? (
              <div className="List p-1 col-start-11 col-span-2">
                <ul className="flex gap-4">
                  <Link
                    href="/Pages/Profile"
                    className="no-underline text-current"
                  >
                    {" "}
                    <li className="text-gray-50 font-bold hover:text-red-500 hover:cursor-pointer hover:animate-pulse">
                      Profile
                    </li>
                  </Link>

                  <button className="no-underline text-current">
                    <li
                      className="text-gray-50 font-bold hover:text-red-500 hover:cursor-pointer hover:animate-pulse"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </button>
                </ul>
              </div>
            ) : (
              <div className="List p-1 col-start-11 col-span-2">
                <ul className="flex gap-4">
                  <Link
                    href="/Pages/Login"
                    className="no-underline text-current"
                  >
                    {" "}
                    <li className="text-gray-50 font-bold hover:text-red-500 hover:cursor-pointer hover:animate-pulse">
                      LogIn
                    </li>
                  </Link>

                  <Link
                    href="/Pages/Register"
                    className="no-underline text-current"
                  >
                    <li className="text-gray-50 font-bold hover:text-red-500 hover:cursor-pointer hover:animate-pulse">
                      Register
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            <div className="headerBody relative mt-24 col-start-5 flex justify-center col-span-4 row-start-2 items-end  ">
              <h1 className="upperBodyText  text-5xl text-red-500 font-bold">
                All
              </h1>
            </div>
            <div className="headerBody relative col-start-5 col-span-4 ">
              <h1 className="upperBodyText  text-5xl text-[#FFB800] font-semibold ">
                Your Neccesities
              </h1>
            </div>
            <div className=" relative col-start-5 flex justify-center col-span-4">
              <h1 className=" text text-3xl text-white font-semibold">
                {" "}
                At one place, one click.
              </h1>
            </div>

            <div className=" w-[500px] row-start-5 flex col-start-4 justify-end">
              <input
                className=" bg-white w-96 h-12 rounded-2xl text-black p-4 font-semibold "
                placeholder="search Products"
              ></input>
            </div>
          </div>
        </div>
        <Midsec />
        <Lowersec />
        <Footer />
        {/* <RegisterShop /> */}
      </div>
    </>
  );
}
