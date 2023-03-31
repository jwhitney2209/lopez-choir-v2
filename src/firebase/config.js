// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-zTuvLbq0lq4_gHXUWEm0Dt1MOaY9SX0",
  authDomain: "lopezchoir-e22b4.firebaseapp.com",
  projectId: "lopezchoir-e22b4",
  storageBucket: "lopezchoir-e22b4.appspot.com",
  messagingSenderId: "657815528957",
  appId: "1:657815528957:web:7e1b76a215e5ab6dd62594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }