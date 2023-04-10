import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth,GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB2j-c9sOKrY7Z4xrdhAx67oO5060eFvbc",
  authDomain: "storedata-6ac93.firebaseapp.com",
  databaseURL: "https://storedata-6ac93-default-rtdb.firebaseio.com",
  projectId: "storedata-6ac93",
  storageBucket: "storedata-6ac93.appspot.com",
  messagingSenderId: "213572543439",
  appId: "1:213572543439:web:fd9e739f941037145be8ba",
  measurementId: "G-3FBEZ7K8E3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();
const fprovider= new FacebookAuthProvider();
fprovider.addScope('email')


export { app, auth , provider, fprovider };