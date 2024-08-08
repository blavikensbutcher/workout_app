// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Toast from "react-native-toast-message";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  sendEmailVerification,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getReactNativePersistence } from "@firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


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

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});


export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async () => {
        if (auth.currentUser) {
          await sendEmailVerification(auth.currentUser);
        }
      },
    );
  } catch (e: any) {
    if (
      e
        .toString()
        .includes("FirebaseError: Firebase: Error (auth/email-already-in-use)")
    ) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Email already in use",
        position: "bottom",
      });
    }
  }
};

export const login = async (
  email: string,
  password: string,
): Promise<User | undefined> => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);

    if (!credentials.user.emailVerified) {
      Toast.show({
        type: "error",
        text1: "Email verification",
        text2: "You must verify your email",
        position: "bottom",
      });
    }
    return credentials.user;
  } catch (error) {

    if (String(error) === "FirebaseError: Firebase: Error (auth/invalid-login-credentials).") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Email or password is incorrect",
        position: "bottom",
      });
    }
  }
};

export const updateUserProfile = async (update: any) => {
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
