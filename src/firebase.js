// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7orar6LD8vmKvZrLfth8ulJp2LXUP2Lo",
    authDomain: "todo-app-chen-c7efe.firebaseapp.com",
    projectId: "todo-app-chen-c7efe",
    storageBucket: "todo-app-chen-c7efe.appspot.com",
    messagingSenderId: "68772892958",
    appId: "1:68772892958:web:a92616c82e7117058cb90f",
    measurementId: "G-GR6M88NPLY"
  };  

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore(app, {
    experimentalForceLongPolling: true,
  });