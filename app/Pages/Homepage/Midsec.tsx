import React, { useEffect } from "react";

function Midsec() {
  const URL = "http://localhost:4500/Deals";
  useEffect(() => {}, []);
  return (
    <div className=" px-4  ">
      <h1 className=" text-3xl text-red-600 text-center font-bold mt-8">
        Hot Deals
      </h1>
      <h6 className=" text-md text-black font-semibold text-center ">
        Get the best deals from E-BaBa. Just one click away, order now from
        comfort of your home.
      </h6>

      <div className=" bg-red-500 h-80 mt-12"></div>

      <h1 className=" text-3xl text-black text-center font-bold mt-20">
        Browse by Category
      </h1>
      <h6 className=" text-md text-black font-semibold text-center ">
        Get the best deals from E-BaBa. Just one click away, order now from
        comfort of your home.
      </h6>
      <div className=" bg-gray-200 h-80 mt-9"></div>
    </div>
  );
}

export default Midsec;
