// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRUWsNH7N56lQMhiWNFeDt0_RxzleYo5o",
  authDomain: "fir-firebase-ca380.firebaseapp.com",
  projectId: "fir-firebase-ca380",
  storageBucket: "fir-firebase-ca380.appspot.com",
  messagingSenderId: "1061943305355",
  appId: "1:1061943305355:web:3a2ef66773eefb5486208e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth