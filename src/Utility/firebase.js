// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXCn4E8coiRhlmmR3ZiSZlVW6LoM0OrR4",
  authDomain: "clone-29741.firebaseapp.com",
  projectId: "clone-29741",
  storageBucket: "clone-29741.appspot.com",
  messagingSenderId: "920599858709",
  appId: "1:920599858709:web:2c27ea917da3d18f1d881c",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
