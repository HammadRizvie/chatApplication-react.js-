import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB0Nkqaxx_qtlE-PWPWykHaIUWCH-RxdBg",
    authDomain: "chatapp-5bda4.firebaseapp.com",
    projectId: "chatapp-5bda4",
    storageBucket: "chatapp-5bda4.appspot.com",
    messagingSenderId: "363594813046",
    appId: "1:363594813046:web:8f2b37173ca20bafd95957",
    measurementId: "G-8PBE9F07Z5"
  };
  
firebase.initializeApp(firebaseConfig);
export default firebase;

