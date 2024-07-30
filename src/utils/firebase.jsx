// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX_xCmJzc-HAZ2qRXFd8bsFZEZW1W0vIM",
  authDomain: "tfc-restaurant-7db69.firebaseapp.com",
  projectId: "tfc-restaurant-7db69",
  storageBucket: "tfc-restaurant-7db69.appspot.com",
  messagingSenderId: "205650044279",
  appId: "1:205650044279:web:f8836a811c2f435faf6d72",
  measurementId: "G-4WYG1NJDJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
