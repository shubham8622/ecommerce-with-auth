import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQUjEbqVTSR6_F-psS_lJiXNTJz0w7G34",
  authDomain: "fir-auth-20cf0.firebaseapp.com",
  projectId: "fir-auth-20cf0",
  storageBucket: "fir-auth-20cf0.appspot.com",
  messagingSenderId: "530981134736",
  appId: "1:530981134736:web:5ec6ed6207b6354b36d315",
  measurementId: "G-3YVX93K04E"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app); 