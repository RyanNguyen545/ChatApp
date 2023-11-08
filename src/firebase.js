import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCwhcYNZ5O5lH7MlJjgBgcFO2fH6jjueo",
  authDomain: "chat-7d5dc.firebaseapp.com",
  projectId: "chat-7d5dc",
  storageBucket: "chat-7d5dc.appspot.com",
  messagingSenderId: "693297519104",
  appId: "1:693297519104:web:d29cda9b1943fb0ae996e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
