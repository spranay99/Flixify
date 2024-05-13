// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2oHtc3cJrGXXBmz820bMHhDCjGxJs4g",
  authDomain: "flixify-f3d15.firebaseapp.com",
  projectId: "flixify-f3d15",
  storageBucket: "flixify-f3d15.appspot.com",
  messagingSenderId: "1020397103054",
  appId: "1:1020397103054:web:ab443c88a9a81cf69eed9f",
  measurementId: "G-P5WTLMBVJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// We have to initialise this once for whole app and export it.
export const auth = getAuth();
