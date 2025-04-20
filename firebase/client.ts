
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfU6PRy5z6uMCwOl1YCJ-D4CZSiLBwt3A",
    authDomain: "prepwise-e786a.firebaseapp.com",
    projectId: "prepwise-e786a",
    storageBucket: "prepwise-e786a.firebasestorage.app",
    messagingSenderId: "688142022480",
    appId: "1:688142022480:web:9531cfadda9de1e3299e55",
    measurementId: "G-V3CMF4V2ZZ"
  };
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)