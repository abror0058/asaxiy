import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, EmailAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAuyjOI-M8sFZxMmgt5Gi7VrWkifXIWS0k",
    authDomain: "asaxiyuzb.firebaseapp.com",
    projectId: "asaxiyuzb",
    storageBucket: "asaxiyuzb.appspot.com",
    messagingSenderId: "988666106941",
    appId: "1:988666106941:web:6193cd78606506c0bfc654",
    measurementId: "G-SQZW7HQZLJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new EmailAuthProvider();