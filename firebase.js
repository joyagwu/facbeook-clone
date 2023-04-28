// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoggvDp7q8dOqjydwdMW8_9vcdtxCxWfI",
  authDomain: "facebook-clone-eba91.firebaseapp.com",
  projectId: "facebook-clone-eba91",
  storageBucket: "facebook-clone-eba91.appspot.com",
  messagingSenderId: "497265665099",
  appId: "1:497265665099:web:40e56b35cf431949c959ce"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp
const db = getFirestore();
const storage = getStorage();


export default app
export { db, storage}