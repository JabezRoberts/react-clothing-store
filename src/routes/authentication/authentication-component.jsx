// import { useEffect } from 'react';

// import { getRedirectResult } from 'firebase/auth';

// import { 
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect 
//   } from "../../utils/firebase/firebase-utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import SignInForm from '../../components/sign-in-form/sign-in-form-component';

import { AuthenticationContainer } from './authentication-styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      {/* <button onClick={logGoogleUser} > Sign In With Google </button>
      <button onClick={signInWithGoogleRedirect } > Sign In With Google Redirect</button> */}
      <SignInForm  />
      <SignUpForm />
    </AuthenticationContainer>
  );
}

export default Authentication;

