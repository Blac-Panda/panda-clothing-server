import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwNOMfEWY2zeNiA_Ken9ptnTIuS_1OaVo",
    authDomain: "crwn-db-e7fed.firebaseapp.com",
    databaseURL: "https://crwn-db-e7fed.firebaseio.com",
    projectId: "crwn-db-e7fed",
    storageBucket: "crwn-db-e7fed.appspot.com",
    messagingSenderId: "600610018544",
    appId: "1:600610018544:web:7379c064978cd288"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;