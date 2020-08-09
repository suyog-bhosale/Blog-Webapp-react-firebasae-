import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBA0LfdE89_n3gtMzqy-FoOTUt58kGlY3o",
  authDomain: "twitter-4dc23.firebaseapp.com",
  databaseURL: "https://twitter-4dc23.firebaseio.com",
  projectId: "twitter-4dc23",
  storageBucket: "twitter-4dc23.appspot.com",
  messagingSenderId: "961456498431",
  appId: "1:961456498431:web:765ebf3119550c42570eca",
  measurementId: "G-X8TKJJ1GB3",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export default db;
