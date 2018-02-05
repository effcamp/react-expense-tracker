import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => () =>
  firebase.auth().signInWithRedirect(googleAuthProvider);

export const startLogout = () => () => firebase.auth().signOut();
