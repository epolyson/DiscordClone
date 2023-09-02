import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn86EQFnXFDZRJnCz-y2YNklbk7Sqrhag",
  authDomain: "discord-clone-d634b.firebaseapp.com",
  projectId: "discord-clone-d634b",
  storageBucket: "discord-clone-d634b.appspot.com",
  messagingSenderId: "952500094887",
  appId: "1:952500094887:web:90fc0297d127106f401882",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
