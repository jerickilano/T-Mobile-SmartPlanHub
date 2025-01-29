// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChmNBy71irXFcvNq6oFGEvnIYnKW-d2t0",
  authDomain: "tmobilesmartplanhub.firebaseapp.com",
  projectId: "tmobilesmartplanhub",
  storageBucket: "tmobilesmartplanhub.firebasestorage.app",
  messagingSenderId: "3588766248",
  appId: "1:3588766248:web:bd6c1246c1a5dec6f1931d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };