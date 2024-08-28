import React from "react";

function Lowersec() {
  return (
    <div className=" h-96  flex mt-24">
      <div className="  w-[50%]">
        <h2 className=" text-[#FF0000] font-bold text-center mt-8">
          Become a Trader
        </h2>

        <h6 className=" font-bold mt-8 text-center p-1">
          Register with us and make your products reach thousands of customers.
          Register and grow with E-BaBa
        </h6>

        <div className=" flex justify-center">
          <button className=" bg-red-500 text-white p-1 font-semibold w-32 mt-2 rounded-md hover:bg-red-700 ">
            {" "}
            Join us Now
          </button>
        </div>
      </div>
      <div className=" bg-red-400 w-[40%]">
        <img src="image.png" alt="joinShop" className=" h-[100%] w-[100%]" />
      </div>
    </div>
  );
}

export default Lowersec;
