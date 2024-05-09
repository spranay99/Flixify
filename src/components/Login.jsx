import React, { useState } from "react";
import { LOGIN_BACKGROUND_IMG } from "../utils/constants";
import Logo from "../assets/Logo.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="overflow-hidden">
      <header className="max-w-[1200px] p-5 mx-auto fixed z-10 xl:left-52 left-0 ">
        <img src={Logo} alt="logo" className="w-32" />
      </header>
      <div className="w-screen h-screen absolute">
        <img
          className="fixed w-full h-full object-cover"
          src={LOGIN_BACKGROUND_IMG}
          alt="background-image"
        />
        <div className="background-overlay fixed w-full h-full"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-20 left-0 right-0 w-[90%] sm:w-[70%] xl:w-[30%] md:p-14 sm:p-8 p-4 mx-auto text-white bg-black rounded-lg my-36 bg-opacity-80"
      >
        <h1 className=" py-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 rounded-md my-2 w-full bg-[#333333] border-2 transition-all duration-[.1s] border-transparent placeholder-[#868586]  focus:border-[#fff] focus:outline-0"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 rounded-md my-2 w-full bg-[#333333] border-2 transition-all duration-[.1s] border-transparent placeholder-[#868586]  focus:border-[#fff] focus:outline-0"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 rounded-md my-2 w-full bg-[#333333] border-2 transition-all duration-[.1s] border-transparent placeholder-[#868586]  focus:border-[#fff] focus:outline-0"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 text-md rounded-md bg-[#e50914] hover:bg-[#d6180b] transition-all duration-[.1s] w-full font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="my-4 text-[#868586]">
            New to Flixify?{" "}
            <a
              className="cursor-pointer text-white transition-all duration-[.2s] hover:underline"
              onClick={toggleSignInForm}
            >
              Sign Up Now
            </a>
          </p>
        ) : (
          <p className="my-4 text-[#868586]">
            Already Registered?{" "}
            <a
              className="cursor-pointer text-white transition-all duration-[.2s] hover:underline"
              onClick={toggleSignInForm}
            >
              Sign In Now
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
