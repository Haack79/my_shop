import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmUVaIO-KC8c8rO6yJ45wPbTp6CxYpxeI",
    authDomain: "my-shop-cb441.firebaseapp.com",
    databaseURL: "https://my-shop-cb441.firebaseio.com",
    projectId: "my-shop-cb441",
    storageBucket: "",
    messagingSenderId: "777564370751",
    appId: "1:777564370751:web:49ef9184e98237dd"
  };

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
        })
      } catch (e) {
        console.log('error creating user', e.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
