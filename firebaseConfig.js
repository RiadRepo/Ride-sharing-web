import { initializeApp } from "firebase/app";

// import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBzZkaoPyJqL40HHwfK_CTjaDNBlhJFOy8",
  authDomain: "ride-sharing-project-auth.firebaseapp.com",
  projectId: "ride-sharing-project-auth",
  storageBucket: "ride-sharing-project-auth.appspot.com",
  messagingSenderId: "1064492167353",
  appId: "1:1064492167353:web:6887587ea91dd39672eb68",
};
export const app = initializeApp(firebaseConfig);
