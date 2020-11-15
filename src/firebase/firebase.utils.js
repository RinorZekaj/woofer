import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDpoxWh-iHZWbSABf7gpnf5wxaA4uPWcQw",
  authDomain: "woofer-d8ca6.firebaseapp.com",
  databaseURL: "https://woofer-d8ca6.firebaseio.com",
  projectId: "woofer-d8ca6",
  storageBucket: "woofer-d8ca6.appspot.com",
  messagingSenderId: "263935172118",
  appId: "1:263935172118:web:1de35f7db1f0e2343fdf37",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  console.log(userAuth.user.uid);

  const userRef = firebase.firestore().doc(`/users/${userAuth.user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth.user;
    console.log(email);

    try {
      await userRef.set({
        email,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
