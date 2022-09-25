// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6_i83uzP9q1zRMMR5AcPn2ZYa-ph4dk0",
  authDomain: "netflix-clone-67b09.firebaseapp.com",
  projectId: "netflix-clone-67b09",
  storageBucket: "netflix-clone-67b09.appspot.com",
  messagingSenderId: "77282882847",
  appId: "1:77282882847:web:62220ce0d67e2045bd2c2a",
  measurementId: "G-E0W51TYZJL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
//const analytics = getAnalytics(app);

export default app
export { auth, db }

