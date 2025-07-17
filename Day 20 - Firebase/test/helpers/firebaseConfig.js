// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc,getDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPTet8bDzkIDPcTUHbuEZCpsgUgHvjyh4",
  authDomain: "task1-e95e6.firebaseapp.com",
  projectId: "task1-e95e6",
  storageBucket: "task1-e95e6.appspot.com",
  messagingSenderId: "708812509967",
  appId: "1:708812509967:web:c227ad166ea120f571a47a",
  measurementId: "G-PNS4574ZXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);