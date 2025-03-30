// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "prepwise-8f126.firebaseapp.com",
    projectId: "prepwise-8f126",
    storageBucket: "prepwise-8f126.firebasestorage.app",
    messagingSenderId: "31449152861",
    appId: "1:31449152861:web:50dc225ac7626d32c2bcb4",
    measurementId: "G-9ES85K19ZV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);