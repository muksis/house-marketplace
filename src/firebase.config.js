import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMkMsc1VXnXd-1KAYxpoJQRG5JNx9fdjE",
  authDomain: "house-marketplace-app-e3b91.firebaseapp.com",
  projectId: "house-marketplace-app-e3b91",
  storageBucket: "house-marketplace-app-e3b91.appspot.com",
  messagingSenderId: "855028564499",
  appId: "1:855028564499:web:128200ed8dfb50fa0375e6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
