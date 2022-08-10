// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIfG4QAy23VCQelM1n9NK0g40hDLZxQdQ",
  authDomain: "fir-demo-8a415.firebaseapp.com",
  projectId: "fir-demo-8a415",
  storageBucket: "fir-demo-8a415.appspot.com",
  messagingSenderId: "268002247538",
  appId: "1:268002247538:web:c43a412896381bb8ee53eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);