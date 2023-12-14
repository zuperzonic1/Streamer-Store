// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf_tXpKk6iUezQ9VXFHOx2vyyltWGkVkU",
  authDomain: "streamer-store.firebaseapp.com",
  projectId: "streamer-store",
  storageBucket: "streamer-store.appspot.com",
  messagingSenderId: "1076203661024",
  appId: "1:1076203661024:web:77a3bf425e3b6be4651285",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
