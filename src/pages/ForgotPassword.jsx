import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../Components/OAuth";
const ForgotPassword = () => {

  const [email, setEmail] = useState('');
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <h1 className=" text-center mt-6 text-3xl font-bold font-mono ">
        Forgot Password
      </h1>
      {/* Div for Both */}
      <div className="flex justify-around flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        {/* Div for img */}
        <div className="md:w-[67%] lg:w-[50%] s-w[100%] mb-12 md:mb-6  ">
          {/* Image */}
          <img
            className="w-full rounded-2xl border-1 border-black-600 drop-shadow-lg"
            src="./img/sign-in-pic.jpg"
            alt="hand holding Building"
          ></img>
        </div>
        {/* Div For Form */}
        <div className=" w-full md:w-[67%] lg:w-[40%]">
          <form className="">
            {/* Input Email */}
            <input
              className="w-full px-4 py-2 text-xl mb-2 text-gray-700 bg-white border-gray-300 rounded-md
              transition ease-in-out"
              placeholder="Email address"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
            ></input>
            <div className="flex justify-between mt-5 whitespace-nowrap text-sm sm:text-lg">
              <p className="flex">
                Don't have an account?
                <Link
                  className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out ml-1"
                  to={"/sign-up"}
                >
                  Register
                </Link>
              </p>
              <Link
                className="text-blue-500  hover:text-blue-700 transition duration-300 ease-in-out"
                to={"/sign-in"}
              >
                Sign in
              </Link>
            </div>
            <button
              type="submit"
              className=" bg-blue-600 text-white w-full px-7 py-3 rounded-md mt-3 text-sm font-medium uppercase shadow-md
             hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              SEND RESET EMAIL
            </button>
            <div>
              <p
                className=" relative before:absolute before:bg-black  before:h-[0.5px] before:w-[45%] before:top-[50%] before:left-0 before:sm-w-[40%]
            after:absolute after:bg-black  after:h-[0.5px] after:w-[45%] after:top-[50%] after:right-0 after:sm-w-[40%]
            text-center mt-2 w-full font-semibold"
              >
                OR
              </p>
            </div>
          <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
