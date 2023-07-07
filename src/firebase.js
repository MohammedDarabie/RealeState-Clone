// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2IXQuDqqZH85rDxlsrJXl5kz908vfWqI",
  authDomain: "realestate-d5fba.firebaseapp.com",
  projectId: "realestate-d5fba",
  storageBucket: "realestate-d5fba.appspot.com",
  messagingSenderId: "959460179977",
  appId: "1:959460179977:web:21d8e9f4cd072d2a0ab8d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();




