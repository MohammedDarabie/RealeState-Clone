import { getAuth, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import ListingItem from "../Components/ListingItem";

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [updatedInfo, setUpdatedInfo] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
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
  //===================================================
  // ================= ON SUBMIT FUNCTION =============
  // ==================================================
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

  //=====================================================
  // ================= FETCH DATA FOR DB  ===============
  // ====================================================
  useEffect(() => {
    async function fetchUserListings() {
      try {
        const listingRef = collection(db, "listings");
        const q = query(
          listingRef,
          where("userRef", "==", auth.currentUser.uid),
          orderBy("timestamp", "desc")
        );
        const querySnap = await getDocs(q);
        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserListings();
  }, [auth.currentUser.uid]);
  //=====================================================
  // ================= Return ===========================
  // ====================================================
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
        <button
          type="button"
          onClick={() => {
            navigate("/create-listing");
          }}
          className=" bg-blue-600 text-white w-full px-3 py-2 lg:px-7 lg:py-3
          lg:text-sm
               rounded-md mt-3 text-xs font-medium uppercase shadow-md
             hover:bg-blue-700 transition duration-200 ease-in-out
              hover:shadow-lg active:bg-blue-800 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          SELL OR RENT YOUR HOME
        </button>
      </div>
      <div className="max-w-6xl px-3 mt-6 mx-auto">
        <h1 className=" text-center mt-6 text-3xl font-bold font-mono mb-6 ">
          My List
        </h1>
        {!loading && listings.length > 0 && (
          <>
            <ul
              className="sm:grid sm:grid-cols-2 lg:grid-cols-3
             xl:grid-cols-4 2xl:grid-cols-5 mt-6 mb-6"
            >
              {listings.map((listing) => {
                return (
                  <ListingItem
                    key={listing.id}
                    listing={listing.data}
                    id={listing.id}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;
