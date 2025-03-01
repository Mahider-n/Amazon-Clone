// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

// auth
import {getAuth} from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Ou-E2QkfGCCD2pLWfixEBToTBJNpLJQ",
  authDomain: "clone-c6768.firebaseapp.com",
  projectId: "clone-c6768",
  storageBucket: "clone-c6768.firebasestorage.app",
  messagingSenderId: "428001945992",
  appId: "1:428001945992:web:1dbfb0102535cc9a43323d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=app.firestore();