"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function PrimNavbar() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setToken(true);
    }
  }, []);
  return (
    <div className="bg-black w-screen h-24 grid grid-cols-11">
      <div className="col-start-1 col-span-2 h-20 flex justify-center items-center">
        <h1 className="text-white font-semibold text-xl">E-BaBa</h1>
      </div>
      <div className="col-start-3 col-span-6 h-20">
        <ul className="text-white flex gap-28 justify-center items-end py-8 font-semibold">
          <Link href="/" className="no-underline text-current">
            <li>Home</li>
          </Link>

          <Link href="/Pages/Shop" className=" no-underline text-current">
            <li>Shop</li>
          </Link>
          <li>About</li>
        </ul>
      </div>
      <div className="col-start-9 col-span-3 h-20">
        {token ? (
          <ul className="text-white flex gap-8 justify-center items-end py-8 font-semibold">
            <Link href="/Pages/Profile" className="no-underline text-current">
              <li>Profile</li>
            </Link>
            <Link href="/" className="no-underline text-current">
              {" "}
              <li>Logout</li>
            </Link>
          </ul>
        ) : (
          <ul className="text-white flex gap-8 justify-center items-end py-8 font-semibold">
            <Link href="/Pages/Login" className="no-underline text-current">
              <li>LogIn</li>
            </Link>
            <Link href="/Pages/Register" className="no-underline text-current">
              {" "}
              <li>Register</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default PrimNavbar;
