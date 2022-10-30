// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDPCwgPmo32cub5eLO0hFbLc6lpqbn6Ek",
  authDomain: "libreria-react-c93f2.firebaseapp.com",
  projectId: "libreria-react-c93f2",
  storageBucket: "libreria-react-c93f2.appspot.com",
  messagingSenderId: "677588353622",
  appId: "1:677588353622:web:cc8a32cf793ffe7178f1f7",
  measurementId: "G-YS363NGJDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);