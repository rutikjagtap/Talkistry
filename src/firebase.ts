import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMqwqBoA8R1Uvo63NB9kDRf3Z0quWcMiU",
  authDomain: "login-655c9.firebaseapp.com",
  projectId: "login-655c9",
  storageBucket: "login-655c9.appspot.com",
  messagingSenderId: "664142988920",
  appId: "1:664142988920:web:c2c1b2c2c4934b466b8f8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
