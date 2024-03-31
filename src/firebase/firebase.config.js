// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh3u0nj2SnhLc5GlX1eKz9FUceUhC409M",
  authDomain: "simple-auth-app-b3163.firebaseapp.com",
  projectId: "simple-auth-app-b3163",
  storageBucket: "simple-auth-app-b3163.appspot.com",
  messagingSenderId: "603801073163",
  appId: "1:603801073163:web:43118133cfea915d41390e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth