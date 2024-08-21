"use client";

import React from "react";
import PrimNavbar from "../../components/primNavbar";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = "http://localhost:4500/authentication/login";

  const data = {
    email,
    password,
  };

  function handleLogin() {
    axios.post(URL, data).then((resp) => {
      console.log("The data sent is:", data);
      alert(resp.data);
    });
  }

  return (
    <div className="h-screen w-screen  grid grid-rows-[auto,1fr]">
      <PrimNavbar />
      <div className="w-[100%] h-full bg-cover bg-center flex ">
        <div
          className=" w-[55%] h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/login.jpg')" }}
        ></div>

        <div className="  w-[50%] h-full">
          <h1 className=" font-bold text-3xl mt-20 text-center">
            {" "}
            Log Into Your Account
          </h1>

          <h6 className=" font-semibold mt-24 ml-36">Email</h6>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className=" bg-gray-300 ml-36 w-80 font-semibold p-1 rounded-md"
          />
          <h6 className=" font-semibold  mt-4 ml-36">Password</h6>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className=" bg-gray-300 ml-36 w-80 font-semibold p-1 rounded-md"
          />
          <br />

          <div className=" flex justify-center mt-8">
            <button
              className=" bg-red-400 text-white p-1 w-36 hover:bg-red-500 "
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
