// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnlruvVZuiFtZkiNH_72s-Voss4v2GDWw",
  authDomain: "customer-service-portal-7a2c4.firebaseapp.com",
  projectId: "customer-service-portal-7a2c4",
  storageBucket: "customer-service-portal-7a2c4.appspot.com",
  messagingSenderId: "281364081766",
  appId: "1:281364081766:web:f1b364b1228afc671f91a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();