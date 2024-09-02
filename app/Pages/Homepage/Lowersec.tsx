import React, { useState } from "react";
import RegisterShop from "@/app/Pages/Registershop/page";
import { useRouter } from "next/navigation";

function Lowersec() {
  const router = useRouter();

  function handleClick() {
    router.push("/Pages/Registershop");
  }

  return (
    <div className="relative h-96 mt-24">
      <div className={`flex h-full `}>
        <div className="w-[50%]">
          <h2 className="text-[#FF0000] font-bold text-center mt-8">
            Become a Trader
          </h2>

          <h6 className="font-bold mt-8 text-center p-1">
            Register with us and make your products reach thousands of
            customers. Register and grow with E-BaBa
          </h6>

          <div className="flex justify-center">
            <button
              className="bg-red-500 text-white p-1 font-semibold w-32 mt-2 rounded-md hover:bg-red-700"
              onClick={handleClick}
            >
              Join us Now
            </button>
          </div>
        </div>
        <div className="bg-red-400 w-[40%]">
          <img src="image.png" alt="joinShop" className="h-full w-full" />
        </div>
      </div>

      {/* Render the RegisterShop component on top of the blurred content */}
    </div>
  );
}

export default Lowersec;
