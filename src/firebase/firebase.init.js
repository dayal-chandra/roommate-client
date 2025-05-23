import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA29zBlUWQUab13lhTM8MoIcvYJ5Sv-HC8",
  authDomain: "room-wala.firebaseapp.com",
  projectId: "room-wala",
  storageBucket: "room-wala.firebasestorage.app",
  messagingSenderId: "1049599895967",
  appId: "1:1049599895967:web:b2299d51be02fc667635aa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
