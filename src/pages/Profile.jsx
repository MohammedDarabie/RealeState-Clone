import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [formdata, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formdata;
  function onLogout() {
    auth.signOut();
    navigate("/");

  }
  return (
    <section className=" flex flex-col items-center w-full">
      <h1 className=" text-center mt-6 text-3xl font-bold font-mono ">
        Profile
      </h1>
      <div className="w-[90%] lg:w-[40%] mt-6 px-3">
        <form className="flex flex-col justify-between items-center">
          <input
            className="px-7 py-3 w-full  text-xs lg:text-xl bg-white text-gray-700 rounded-lg mb-5"
            value={name}
          ></input>
          <input
            className="px-7 py-3 w-full  text-xs lg:text-xl bg-white text-gray-700 rounded-lg mb-5"
            placeholder="Email"
            value={email}
          ></input>
        </form>
        <div className="flex justify-between items-center whitespace-nowrap text-sm lg:text-lg">
          <p>
            Update Info?
            <span
              className="text-blue-600 transformation duration-200
             hover:text-blue-900 ease-in-out ml-2 cursor-pointer"
            >
              Edit
            </span>
          </p>
          <p
            onClick={onLogout}
            className="text-red-600 transformation duration-200 hover:text-red-900 ease-in-out cursor-pointer"
          >
            Sign out
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
