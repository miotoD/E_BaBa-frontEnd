import React from "react";

function Footer() {
  return (
    <div className=" bg-black h-[400px] mt-14 grid grid-cols-9 grid-rows-8">
      <h4 className=" col-start-5 ml-7 col-span-2 row-start-4 row-span-1 text-white">
        E-BaBa
      </h4>

      {/* <ul className=" text-white text-[12px] row-start-4 col-start-3 ">
        <li>Home </li>
        <li className=" mt-3">About Us</li>
        <li className=" mt-3">Browse</li>
        <li className=" mt-3">FAQ</li>
      </ul> */}

      <h6 className=" col-start-5 col-span-2 row-start-7 text-white font-semibold">
        All rights reserved
      </h6>
    </div>
  );
}

export default Footer;
