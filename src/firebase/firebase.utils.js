import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCh2ZVuFes5lZVtQPplCWfhbcCqfVRTNI4",
  authDomain: "closthes-shop-db.firebaseapp.com",
  databaseURL: "https://closthes-shop-db.firebaseio.com",
  projectId: "closthes-shop-db",
  storageBucket: "closthes-shop-db.appspot.com",
  messagingSenderId: "421717764618",
  appId: "1:421717764618:web:e23abcd4a6a2f842850df3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;