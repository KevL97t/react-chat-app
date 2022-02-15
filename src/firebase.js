import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp(
    {
        apiKey: "AIzaSyA3PmWRM2nSPvBAtvX3zUni2zjAgAuRfnA",
        authDomain: "unichat-a6954.firebaseapp.com",
        projectId: "unichat-a6954",
        storageBucket: "unichat-a6954.appspot.com",
        messagingSenderId: "169116534974",
        appId: "1:169116534974:web:08e0622e47c936caa8b6ef"
    }
).auth();