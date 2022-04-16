// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJB-IYcRbEXwcWWou1jscl5KpnRijC8Rk",
  authDomain: "ema-jhon-auth-react.firebaseapp.com",
  projectId: "ema-jhon-auth-react",
  storageBucket: "ema-jhon-auth-react.appspot.com",
  messagingSenderId: "266856607438",
  appId: "1:266856607438:web:2ac375d0552d7157522a9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;