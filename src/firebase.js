import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDcECHTqbwpuL6BAc4EWKmQajiC10DpxBc",
  authDomain: "plantula-dc764.firebaseapp.com",
  projectId: "plantula-dc764",
  storageBucket: "plantula-dc764.appspot.com",
  messagingSenderId: "303577379236",
  appId: "1:303577379236:web:ee70dec2915b740e3f9131",
  measurementId: "G-XJE5MFY32S"
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();