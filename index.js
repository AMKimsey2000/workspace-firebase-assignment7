// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyA36sUzMsdEYel8St87dZDh10vLbyLc_Ow",
  authDomain: "fire-assign7.firebaseapp.com",
  databaseURL: "https://fire-assign7.firebaseio.com",
  projectId: "fire-assign7",
  storageBucket: "fire-assign7.appspot.com",
  messagingSenderId: "300042996526",
  appId: "1:300042996526:web:02cac17a21ed2e7507c8bf",
  measurementId: "G-QSQ8750499"
};

firebase.initializeApp(firebaseConfig);



// Save the list to database

