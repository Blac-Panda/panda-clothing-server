import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBwNOMfEWY2zeNiA_Ken9ptnTIuS_1OaVo",
    authDomain: "crwn-db-e7fed.firebaseapp.com",
    databaseURL: "https://crwn-db-e7fed.firebaseio.com",
    projectId: "crwn-db-e7fed",
    storageBucket: "",
    messagingSenderId: "600610018544",
    appId: "1:600610018544:web:7379c064978cd288"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


