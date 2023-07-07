import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "./../firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import {toast} from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  // STATE FOR PASSWORD VISIBILITY
  const [show, setShow] = useState(false);
  // STATE FOR FORM FIELDS
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // DESTRUCTURING FORM OBJECT
  const { name, email, password } = formData;
  // WHEN ICON CLICKED CHANGE VISIBILITY OF PASSWORD
  const clicked = () => {
    setShow(!show);
  };
  // ONCHANGE FUNCTION FOR STATES
  const onChange = (e) => {
    setFormData((previousState) => {
      return {
        ...previousState,
        [e.target.id]: e.target.value,
      };
    });
  };
  // ON SUBMIT FUNCTION FOR FORM
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the Auth function from /auth
      const auth = getAuth();
      // Create the authentication using auth, Email and Password
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Updating the current user to add a display name
      const newUser = await updateProfile(auth.currentUser, {
        displayName: name,
      });
      //
      const user = userCredentials.user;
      console.log(user);
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success('Successfully Logged In')
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <h1 className=" text-center mt-6 text-3xl font-bold font-mono ">
        Sign Up
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
          <form onSubmit={onSubmit}>
            {/* Input Name */}
            <input
              className="w-full px-4 py-2 text-xl mb-2 text-gray-700 bg-white border-gray-300 rounded-md
              transition ease-in-out"
              placeholder="Full Name"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
            ></input>
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
            {/* Input Password */}
            <div className="relative ">
              {!show ? (
                <svg
                  onClick={clicked}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute end-0 right-3 top-2 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 absolute end-0 right-3 top-2 sm:text-sm cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={clicked}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}

              <input
                className="w-full px-4 py-2 text-xl text-gray-700  bg-white border-gray-300 rounded-md
              transition ease-in-out"
                placeholder="Password"
                type={show ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
              ></input>
            </div>
            <div className="flex justify-between mt-5 whitespace-nowrap text-sm sm:text-lg">
              <p className="flex">
                Have an account?
                <Link
                  className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out ml-1"
                  to={"/sign-in"}
                >
                  Sign in
                </Link>
              </p>
              <Link
                className="text-blue-500  hover:text-blue-700 transition duration-300 ease-in-out"
                to={"/forgot-password"}
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className=" bg-blue-600 text-white w-full px-7 py-3 rounded-md mt-3 text-sm font-medium uppercase shadow-md
             hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              SIGN UP
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

export default SignUp;
