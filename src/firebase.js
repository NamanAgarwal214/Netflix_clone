// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFEFkBFzQ7ym_noJQHteNKwDI5OAw-aXs",
  authDomain: "netflix-clone-ba7b6.firebaseapp.com",
  projectId: "netflix-clone-ba7b6",
  storageBucket: "netflix-clone-ba7b6.appspot.com",
  messagingSenderId: "170337270852",
  appId: "1:170337270852:web:fb2710d1b3dfadfebcd011",
  measurementId: "G-6ZC9MQK6VQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export { auth };
