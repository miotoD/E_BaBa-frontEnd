import React from "react";
import Link from "next/link";

function PrimNavbar() {
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
          <li>Shop</li>
          <li>About</li>
        </ul>
      </div>
      <div className="col-start-9 col-span-3 h-20">
        <ul className="text-white flex gap-8 justify-center items-end py-8 font-semibold">
          <Link href="/Pages/Login" className="no-underline text-current">
            <li>LogIn</li>
          </Link>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
}

export default PrimNavbar;
