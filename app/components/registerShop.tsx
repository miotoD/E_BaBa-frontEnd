import React from "react";
import { useForm } from "react-hook-form";

function RegisterShop() {
  type registerForm = {
    shopName: string;
    userName: string;
    email: string;
    password: string;
  };

  const { register } = useForm<registerForm>();
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" h-[540px] w-[560px] bg-white border-red-600 border-[4px]  ">
        <h4 className=" font-extrabold text-center mt-5">Register Your Shop</h4>
        <h6 className=" font-bold text-red-500 text-center mt-3">
          Become a Trader
        </h6>

        <div className=" border-black border-[3px] h-20 w-96 ml-20 p-2">
          <p className=" text-xs font-bold">
            Note: Your user account will be automatically created when
            registering your shop if you don’t have one. Login to your account
            and start trading goods :)
          </p>
        </div>

        <label
          htmlFor="label"
          id="shopName"
          className=" ml-36 mt-6 font-semibold text-lg"
        >
          Shop Name
        </label>
        <br />

        <input
          type="text"
          id="shopName"
          className=" bg-gray-300 ml-36  w-64 p-1 text-sm font-semibold"
          {...register("shopName", {
            required: " ShopName Requried!",
          })}
        />

        <label
          htmlFor="label"
          id="userName"
          className=" ml-36 mt-6 font-semibold text-lg"
        >
          UserName
        </label>
        <br />

        <input
          type="text"
          id="userName"
          className=" bg-gray-300 ml-36  w-64 p-1 text-sm font-semibold"
        />

        <label
          htmlFor="label"
          id="email"
          className=" ml-36 mt-6 font-semibold text-lg"
        >
          Email
        </label>
        <br />

        <input
          type="email"
          id="email"
          className=" bg-gray-300 ml-36  w-64 p-1 text-sm font-semibold"
        />

        <label
          htmlFor="label"
          id="password"
          className=" ml-36 mt-6 font-semibold text-lg"
        >
          Password
        </label>
        <br />

        <input
          type="password"
          id="password"
          className=" bg-gray-300 ml-36  w-64 p-1 text-sm font-semibold"
        />
      </div>
    </div>
  );
}

export default RegisterShop;
