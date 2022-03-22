// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_KFpHsGVrCrCXyh_BE_Zjr4BkIm5Gyk",
  authDomain: "e-commerce-clone-b70a4.firebaseapp.com",
  projectId: "e-commerce-clone-b70a4",
  storageBucket: "e-commerce-clone-b70a4.appspot.com",
  messagingSenderId: "510370509378",
  appId: "1:510370509378:web:3fa1f658dbc9d3569ef3db",
  measurementId: "G-92L45F3FRJ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const firebaseDB = firebaseApp.firestore();
const firebaseAuth = firebase.auth();

export { firebaseDB, firebaseAuth };
