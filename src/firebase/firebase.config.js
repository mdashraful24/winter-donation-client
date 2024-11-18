// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj4fARCmOspraW9ibYPstwKUugf8OnXOc",
  authDomain: "winter-donation-2ff74.firebaseapp.com",
  projectId: "winter-donation-2ff74",
  storageBucket: "winter-donation-2ff74.firebasestorage.app",
  messagingSenderId: "155303294603",
  appId: "1:155303294603:web:fbdfe88f9e1fcdd835c68e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);