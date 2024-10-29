import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO8auIcKmyTpQEAFOgQNC9djlEorsP9NY",
  authDomain: "codebase-25bba.firebaseapp.com",
  projectId: "codebase-25bba",
  storageBucket: "codebase-25bba.appspot.com",
  messagingSenderId: "235226493114",
  appId: "1:235226493114:web:35127313f7c8216c7d9283",
  measurementId: "G-KLBM41SE5W",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, analytics, db, storage, auth };
