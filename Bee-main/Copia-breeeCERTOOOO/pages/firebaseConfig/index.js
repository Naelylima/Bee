import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9rrN6lykaPJ69jxDuXKcMV6ZnOV4YPng",
  authDomain: "beedelivery-bf5d7.firebaseapp.com",
  projectId: "beedelivery-bf5d7",
  storageBucket: "beedelivery-bf5d7.appspot.com",
  messagingSenderId: "314036492094",
  appId: "1:314036492094:web:518a6a2850d6ae5d7cbe6f"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logout,
  storage,
};
