// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX5gWDgKw_2pjg5dcTcm4akSKBWNCkP2c",
  authDomain: "ride-sharing-project-auth.firebaseapp.com",
  projectId: "ride-sharing-project-auth",
  storageBucket: "ride-sharing-project-auth.appspot.com",
  messagingSenderId: "1064492167353",
  appId: "1:1064492167353:web:6887587ea91dd39672eb68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
