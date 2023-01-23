// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-3nQbgoPXZbia2VTpx8gO0W0FwBX72RY",
  authDomain: "seba-porfolio.firebaseapp.com",
  projectId: "seba-porfolio",
  storageBucket: "seba-porfolio.appspot.com",
  messagingSenderId: "661121864945",
  appId: "1:661121864945:web:b67bcf6bfbe693a09fc550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)