// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0yKQ8Y5vAkCNVx657G_7jxBtn7F6WuKg",
    authDomain: "genius-car-service-34364.firebaseapp.com",
    projectId: "genius-car-service-34364",
    storageBucket: "genius-car-service-34364.appspot.com",
    messagingSenderId: "69147726444",
    appId: "1:69147726444:web:736972b0bd1f79aba93e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;