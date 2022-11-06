import { useEffect } from 'react';

import { getRedirectResult } from 'firebase/auth';

import { 
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect 
  } from "../../utils/firebase/firebase-utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import SignInForm from '../../components/sign-in-form/sign-in-form-component';

import './authentication-styles.scss';

const Authentication = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);

    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    console.log(userDocRef);
  }, []);



  return (
    <div className='authentication-container'>
      <h1>Sign In Page</h1>
      {/* <button onClick={logGoogleUser} > Sign In With Google </button>
      <button onClick={signInWithGoogleRedirect } > Sign In With Google Redirect</button> */}
      <SignInForm  />
      <SignUpForm />
    </div>
  );
}

export default Authentication;

