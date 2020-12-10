import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBXRp0tEB125rqnHapPpxu5_E0FJUANfTA",
    authDomain: "chad-72922.firebaseapp.com",
    databaseURL: "https://chad-72922-default-rtdb.firebaseio.com",
    projectId: "chad-72922",
    storageBucket: "chad-72922.appspot.com",
    messagingSenderId: "40921074721",
    appId: "1:40921074721:web:824784da38bd9499bc2760"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const emailAuthProvider = firebase.auth.EmailAuthProvider();