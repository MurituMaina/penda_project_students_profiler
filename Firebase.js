// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDALmXWEX0SxWB7SBKbvJXiTf3NTG7fMnM",
  authDomain: "pendaproject-c9376.firebaseapp.com",
  projectId: "pendaproject-c9376",
  storageBucket: "pendaproject-c9376.appspot.com",
  messagingSenderId: "569239180814",
  appId: "1:569239180814:web:ccb4e0318eb949f8a24e5f",
  measurementId: "G-NCE3XJ46SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);