// Import the firebase and authentification functions
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase configuration that is used to connect with the database
// Get them by logging into the Firebase console. project settings -> General -> your apps
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

// Create the authentification service with Firebase
export const auth = firebase.auth();
// Get the Google authentification provider. This will be used for logging in with Google credentials
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Connect with the firebase database
export const db = firebase.firestore();
