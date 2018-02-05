import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => () =>
  firebase.auth().signInWithRedirect(googleAuthProvider);
