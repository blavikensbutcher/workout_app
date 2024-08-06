// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Toast from 'react-native-toast-message';
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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


export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    if (e
      .toString()
      .includes("FirebaseError: Firebase: Error (auth/email-already-in-use)")){
      Toast.show({
        type: 'error',
        text1: "Error",
        text2: "Email already in use",
        position: "bottom"
      })
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    Toast.show({
      type: 'success',
      text1: "Successfully",
      text2: "Login is successfully",
      position: "bottom"
    })
    return credentials.user;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (update: {displayName?: string, photoURL: string}) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};

export const logout = () => {
  return signOut(auth);
};
