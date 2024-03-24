// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2176e.firebaseapp.com",
  projectId: "mern-estate-2176e",
  storageBucket: "mern-estate-2176e.appspot.com",
  messagingSenderId: "663224154068",
  appId: "1:663224154068:web:4434bff44067ba4e7a4841",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
