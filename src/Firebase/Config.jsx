import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnrXcfm2DFzzbMwVd2ty4oydZ9qSnGiB8",
  authDomain: "carpishop-eb6ea.firebaseapp.com",
  projectId: "carpishop-eb6ea",
  storageBucket: "carpishop-eb6ea.appspot.com",
  messagingSenderId: "380430211990",
  appId: "1:380430211990:web:ad8ce8cba96769b84bdbb7"
};

// INICIALIZAR FIREBASE
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);