// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBu9yBDtwDkDlSTXxo1mtLTGYPSAwpWeo",
  authDomain: "chatapp-f271f.firebaseapp.com",
  projectId: "chatapp-f271f",
  storageBucket: "chatapp-f271f.appspot.com",
  messagingSenderId: "158610481361",
  appId: "1:158610481361:web:0cf8c247b71446c3c865f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();




// const firebaseConfig = {
//   apiKey: "AIzaSyCBu9yBDtwDkDlSTXxo1mtLTGYPSAwpWeo",
//   authDomain: "chatapp-f271f.firebaseapp.com",
//   projectId: "chatapp-f271f",
//   storageBucket: "chatapp-f271f.appspot.com",
//   messagingSenderId: "158610481361",
//   appId: "1:158610481361:web:0cf8c247b71446c3c865f0"
// };
