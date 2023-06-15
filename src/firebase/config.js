/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLhDsrtK_i6YW-kKab4jmkZ4rFX7w6nxQ",
    authDomain: "olx-clone-55a18.firebaseapp.com",
    projectId: "olx-clone-55a18",
    storageBucket: "olx-clone-55a18.appspot.com",
    messagingSenderId: "961343395044",
    appId: "1:961343395044:web:ef72a5b86dc3dc5b0e48f1",
    measurementId: "G-ZB8FRLV4E7"
  };
  export default firebase.initializeApp(firebaseConfig);

// export default firebase.initializeApp(firebaseConfig)