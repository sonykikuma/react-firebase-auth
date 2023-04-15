// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLkPpe7TbrW8hGFBdXtRCXGtZyv53xTow",
  authDomain: "react-auth-f55b3.firebaseapp.com",
  projectId: "react-auth-f55b3",
  storageBucket: "react-auth-f55b3.appspot.com",
  messagingSenderId: "189456549334",
  appId: "1:189456549334:web:9ee03f15e50d28f7171077",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
