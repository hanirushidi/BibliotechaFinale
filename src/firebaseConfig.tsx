import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA_Q5e5Swf1cPFakEO0ByT9w4Rf2PTFTcI",
  authDomain: "bibliotecha-2b67a.firebaseapp.com",
  projectId: "bibliotecha-2b67a",
  storageBucket: "bibliotecha-2b67a.appspot.com",
  messagingSenderId: "401480400534",
  appId: "1:401480400534:web:bf2e74df06ac2cf57b4cb7",
  measurementId: "G-PWQ0BK0JK5",
};
initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
