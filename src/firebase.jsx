// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0Zh2K_ECuPqd9_ZjW1EonD1rPzXgpe5w",
  authDomain: "user-management-app-b1bcd.firebaseapp.com",
  projectId: "user-management-app-b1bcd",
  storageBucket: "user-management-app-b1bcd.appspot.com",
  messagingSenderId: "111118337425",
  appId: "1:111118337425:web:5d84011fe78b17ffb14630",
  measurementId: "G-4SW1C0RKCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
