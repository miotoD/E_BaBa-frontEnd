"use client";
import PrimNavbar from "@/app/components/primNavbar";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Register() {
  type formFields = {
    userName: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formFields>();

  const URL = "http://localhost:4500/authentication/register";

  const submitForm: SubmitHandler<formFields> = async (data) => {
    await axios.post(URL, data).then((resp) => {
      console.log("data sent is:", data);
      alert(resp.data);
      reset();
    });
  };
  return (
    <div className=" h-screen w-screen bg-green-300 flex flex-col">
      <PrimNavbar />

      <div className=" flex-grow bg-red-400 w-full flex">
        <div
          className=" h-full w-[60%] bg-indigo-400"
          style={{ backgroundImage: "url('/reg_real.avif')" }}
        ></div>

        <div className=" bg-white h-full w-[50%]">
          <h1 className=" text-2xl font-semibold text-center mt-20">
            Let's Register Your Account
          </h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <h6 className=" font-semibold text-md ml-40 mt-16">Username</h6>
            <input
              type="text"
              id="username"
              className=" bg-gray-300 font-semibold ml-40 w-72 p-1 mt-2 rounded-md"
              {...register("userName", {
                required: " Username required!",
              })}
            />
            {errors.userName && (
              <div className="  text-red-400 text-sm flex justify-center">
                {" "}
                {errors.userName.message}
              </div>
            )}

            <h6 className=" font-semibold text-md ml-40 mt-2">Email</h6>
            <input
              type="email"
              id="email"
              className=" bg-gray-300 font-semibold ml-40 w-72 p-1 mt-2 rounded-md"
              {...register("email", {
                required: "Email required!",
              })}
            />
            {errors.email && (
              <div className=" text-red-400 text-sm flex justify-center">
                {errors.email.message}
              </div>
            )}
            <h6 className=" font-semibold text-md ml-40 mt-2">Password</h6>
            <input
              type="password"
              id="password"
              className=" bg-gray-300 font-semibold ml-40 w-72 p-1 mt-2 rounded-md"
              {...register("password", {
                required: "Password cannot be empty!",
                minLength: {
                  value: 8,
                  message: "Password must be min 8 characters!",
                },
              })}
            />
            {errors.password && (
              <div className=" text-red-400 text-sm flex justify-center">
                {errors.password.message}
              </div>
            )}
            <div className=" flex justify-center">
              <button
                className=" w-40 bg-red-400 p-1 mt-4 text-white rounded-sm font-semibold hover:bg-red-500"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
