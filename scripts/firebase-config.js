import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyD09I0u4wkks_EaunStZ_Mx6GzxNaS_q8g",
  authDomain: "pra-fazer-app-52548.firebaseapp.com",
  databaseURL: "https://pra-fazer-app-52548-default-rtdb.firebaseio.com",
  projectId: "pra-fazer-app-52548",
  storageBucket: "pra-fazer-app-52548.appspot.com",
  messagingSenderId: "722639331463",
  appId: "1:722639331463:web:9b7cefeee5cb27c8b5d822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };