import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [updatedInfo, setUpdatedInfo] = useState(false);
  const [formdata, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formdata;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((previousState) => {
      return {
        ...previousState,
        [e.target.id]: e.target.value,
      };
    });
  }
  // On SUbmit Update
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //  Update in Auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // Update in FireStore
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile Details Updated");
    } catch (error) {
      toast.error("Couldn't Update Info");
    }
  }
  return (
    <section className=" flex flex-col items-center w-full">
      <h1 className=" text-center mt-6 text-3xl font-bold font-mono ">
        Profile
      </h1>
      <div className="w-[90%] lg:w-[40%] mt-6 px-3">
        <form className="flex flex-col justify-between items-center">
          <input
            className={`px-7 py-3 w-full  text-xs lg:text-xl
             bg-white text-gray-700 rounded-lg mb-5 ${
               updatedInfo && "bg-yellow-200 focus:bg-red-200"
             }`}
            value={name}
            disabled={!updatedInfo}
            onChange={onChange}
            id="name"
          ></input>
          <input
            className={`px-7 py-3 w-full  text-xs lg:text-xl
            bg-white text-gray-700 rounded-lg mb-5 ${
              updatedInfo && "bg-yellow-200 focus:bg-red-200"
            }`}
            placeholder="Email"
            value={email}
            disabled={!updatedInfo}
            onChange={onChange}
            id="email"
          ></input>
        </form>
        <div className="flex justify-between items-center whitespace-nowrap text-sm lg:text-lg">
          <p>
            Update Info?
            <span
              className="text-blue-600 transformation duration-200
             hover:text-blue-900 ease-in-out ml-2 cursor-pointer"
              onClick={() => {
                updatedInfo && onSubmit();
                setUpdatedInfo((prev) => !prev);
              }}
            >
              {updatedInfo ? "Apply" : "Edit"}
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
