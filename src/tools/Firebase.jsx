// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAeYx-QbGq79RNxSQhkqXo6yErkO11IsCY",
//     authDomain: "social-media-saver-58dfd.firebaseapp.com",
//     projectId: "social-media-saver-58dfd",
//     storageBucket: "social-media-saver-58dfd.appspot.com",
//     messagingSenderId: "567651085551",
//     appId: "1:567651085551:web:87fd52b3b155665da7ff1a",
//     measurementId: "G-KS1ZCQ95QL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeYx-QbGq79RNxSQhkqXo6yErkO11IsCY",
    authDomain: "social-media-saver-58dfd.firebaseapp.com",
    projectId: "social-media-saver-58dfd",
    storageBucket: "social-media-saver-58dfd.appspot.com",
    messagingSenderId: "567651085551",
    appId: "1:567651085551:web:87fd52b3b155665da7ff1a",
    measurementId: "G-KS1ZCQ95QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;