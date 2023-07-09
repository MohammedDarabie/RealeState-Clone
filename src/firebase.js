// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinmATgV_pKAtxClydLW_6W3kxJ71X_yA",
  authDomain: "realestate2-394d6.firebaseapp.com",
  projectId: "realestate2-394d6",
  storageBucket: "realestate2-394d6.appspot.com",
  messagingSenderId: "1069881425350",
  appId: "1:1069881425350:web:d4b6456f9f89c9343446c7",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
