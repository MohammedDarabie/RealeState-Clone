import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  // Taking the Object from useLocation that contains Pathname under 'location.pathname'
  const location = useLocation();
  // Navigate is used to navigate through our website
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth  , (user) => {
      if(user){
        setLoggedIn("Profile")
      }else {
        setLoggedIn("Sign In")
      }
    })
  },[auth])
  // Function that return true if the path passed is equal to the location.pathname
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  const [loggedIn, setLoggedIn] = useState("SIGN IN");
  // Return Statement
  return (
    <div className="shadow-sm bg-white border-b sticky top-0 z-50">
      {/* Header Component */}
      <header className=" flex justify-between items-center px-3    max-w-6xl mx-auto">
        {/* Div Containing Logo */}
        <div
          //  OnCLick Command to navigate to requested EndPoint
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer "
        >
          {/* Logo IMG */}
          <img className="h-9 " src="./img/building.png" alt="logo" />
          {/* Logo Name */}
          <p className="font-bold">
            Real<span className=" italic text-orange-900">EState</span>
          </p>
        </div>

        {/* Navigation Bar */}
        <div>
          <ul className="flex items-center space-x-10 ">
            {/* Home page */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px]
               border-b-transparent 
               ${pathMatchRoute("/") && "text-black border-b-red-500 "}`}
              //  OnCLick Command to navigate to requested EndPoint
              onClick={() => navigate("/")}
            >
              Home
            </li>
            {/* Offers Page */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px]
               border-b-transparent 
                ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            {/* Sign In Page */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold
               text-gray-700 border-b-[3px]
               border-b-transparent 
               ${
                 (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                 "text-black border-b-red-500"
               }`}
              onClick={() => navigate("/profile")}
            >
              {loggedIn}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
