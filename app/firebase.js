// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNoqxqaOyeVEk42imKBGJa7pSvBX7UBms",
    authDomain: "final-project-firebase-b9411.firebaseapp.com",
    projectId: "final-project-firebase-b9411",
    storageBucket: "final-project-firebase-b9411.appspot.com",
    messagingSenderId: "673328946996",
    appId: "1:673328946996:web:aa6df6615a93e9ec504f61"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);;
export {db};