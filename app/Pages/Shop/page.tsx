"use client";
import PrimNavbar from "@/app/components/primNavbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/app/components/Footer";

function Shop() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4500/shop/getshop").then((resp) => {
      console.log("Shops fetched:", resp.data);
      setShops(resp.data);
    });
  }, []);

  return (
    <div>
      <PrimNavbar />
      <div
        className="top-container relative h-[490px] bg-cover bg-center grid grid-rows-4 grid-cols-5 text-white"
        style={{ backgroundImage: "url('/register.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-3xl font-bold text-center col-start-1 col-span-5 row-start-2 ">
          Browse and Shop from peoples like You!{" "}
        </h1>
        <br />
        <button className="relative z-10 bg-red-500 text-white row-start-3 h-8 w-32 col-start-3 ml-4 hover:bg-red-400 rounded-md">
          Browse
        </button>
      </div>

      <div className="main mt-52 p-5 ">
        {shops.map((shop) => (
          <div key={shop.id} className=" bg-black h-80 ">
            <h1 className=" text-white text-center text-lg font-bold py-4">
              {shop.ShopName}
            </h1>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
