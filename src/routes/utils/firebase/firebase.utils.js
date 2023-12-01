import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc , getDoc , getFirestore, setDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyClQqcwh_t3nU3jlYRk_s8Igkg1JDTgMdc",
  authDomain: "crown-cloathing-26ee8.firebaseapp.com",
  projectId: "crown-cloathing-26ee8",
  storageBucket: "crown-cloathing-26ee8.appspot.com",
  messagingSenderId: "518048181799",
  appId: "1:518048181799:web:11fa1213979c371f1ce802",
  measurementId: "G-K981TCTL56",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

const createDocumentFromAuth = async (userAuth) =>{
    
}