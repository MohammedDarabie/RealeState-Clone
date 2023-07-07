import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./../firebase";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();
  // ==========================
  // ON GOOGLE CLICK FUNCTION
  // ==========================
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Checking if User Exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // Add to database
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
        navigate("/");
        toast.success('Successfully Loged In')
      } else {
        
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <button
      onClick={onGoogleClick}
      className=" relative flex items-center justify-center  bg-red-600 text-white w-full px-7 py-3 rounded-md mt-3 text-sm font-medium uppercase shadow-md
    hover:bg-red-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-red-800"
      type="button"
    >
      <FcGoogle className="hidden lg:block absolute text-3xl left-[20%] bg-white rounded-2xl " />
      Continue with google
    </button>
  );
}
