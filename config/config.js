// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAkPd3zeIXclicK9iMfThQg5ESrFpkL8c",
  authDomain: "blavikensbutcher-sports.firebaseapp.com",
  projectId: "blavikensbutcher-sports",
  storageBucket: "blavikensbutcher-sports.appspot.com",
  messagingSenderId: "777425491753",
  appId: "1:777425491753:web:cf0688ebc458023c940938",
  measurementId: "G-M66BJ1R1D3",
};

const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

export const login = () => {
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  return signOut(auth);
};
