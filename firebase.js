// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';
import { getFirestore, collection, doc, setDoc, getDoc } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjTPujcldexx19hX_Mvqsmg0BDy0ybXdg",
  authDomain: "healthcarev1.firebaseapp.com",
  projectId: "healthcarev1",
  storageBucket: "healthcarev1.appspot.com",
  messagingSenderId: "884418102544",
  appId: "1:884418102544:web:58868bf7af412eecf71195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// console.log(database)
const firestore = getFirestore(app);
export { app,firestore };