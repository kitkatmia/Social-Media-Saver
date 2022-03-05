// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8zK14nD5OJDDgq72-c99tAOFSTJfTeiE",
  authDomain: "social-media-savior.firebaseapp.com",
  projectId: "social-media-savior",
  storageBucket: "social-media-savior.appspot.com",
  messagingSenderId: "335065063585",
  appId: "1:335065063585:web:5522e9b1241fd85480d0e0",
  measurementId: "G-8F2D19VGNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;