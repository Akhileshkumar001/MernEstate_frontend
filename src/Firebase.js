// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mer-estate-7385f.firebaseapp.com",
  projectId: "mer-estate-7385f",
  storageBucket: "mer-estate-7385f.appspot.com",
  messagingSenderId: "480188538785",
  appId: "1:480188538785:web:a18f667ebbd4ee913f35e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);