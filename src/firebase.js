// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAQgFQJxpD0ZZVEW25Wh3q1_EZ_ZI30tLs",
    authDomain: "my-twitter-clone-646cb.firebaseapp.com",
    databaseURL: "https://my-twitter-clone-646cb.firebaseio.com",
    projectId: "my-twitter-clone-646cb",
    storageBucket: "my-twitter-clone-646cb.appspot.com",
    messagingSenderId: "743261648403",
    appId: "1:743261648403:web:20749dbefb350cf998f1e6",
    measurementId: "G-DEKNZ346TP"
  };

   const firebaseApp =firebase.initializeApp(firebaseConfi);



   const db=firebase.firestore();

   export default db;