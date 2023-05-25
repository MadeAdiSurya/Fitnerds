// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGtkyyOZn4ZH9S3vP6-3fggb2emUigxfs",
  authDomain: "fitnerds-83acb.firebaseapp.com",
  projectId: "fitnerds-83acb",
  storageBucket: "fitnerds-83acb.appspot.com",
  messagingSenderId: "578003287270",
  appId: "1:578003287270:web:57f6260aa45e443ae5cf27",
  measurementId: "G-597KR2NGY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
