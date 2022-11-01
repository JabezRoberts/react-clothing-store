//import { initializeApp } from 'firebase/app';//everything to get firebase running

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';

import {
  getFireStore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqJ_pAy1BZ-elaGQGAlx5I6CQ7wTFcXic",
  authDomain: "clothing-store-83597.firebaseapp.com",
  projectId: "clothing-store-83597",
  storageBucket: "clothing-store-83597.appspot.com",
  messagingSenderId: "484675490709",
  appId: "1:484675490709:web:1c0780630b00210c0a9c9c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();


provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFireStore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;

}



