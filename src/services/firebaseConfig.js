import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDPCwgPmo32cub5eLO0hFbLc6lpqbn6Ek",
  authDomain: "libreria-react-c93f2.firebaseapp.com",
  projectId: "libreria-react-c93f2",
  storageBucket: "libreria-react-c93f2.appspot.com",
  messagingSenderId: "677588353622",
  appId: "1:677588353622:web:cc8a32cf793ffe7178f1f7",
  measurementId: "G-YS363NGJDG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);