import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import {
    addDoc, collection, getDocs, getFirestore,
    query, where
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCu-mQ8_RFJISF5URkxVhvSHzB2o0KY0Nw",
    authDomain: "e-health-1228e.firebaseapp.com",
    databaseURL: "https://e-health-1228e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "e-health-1228e",
    storageBucket: "e-health-1228e.appspot.com",
    messagingSenderId: "445221353463",
    appId: "1:445221353463:web:a042c8c5256ab9a872e0f2",
    measurementId: "G-LX5JLQ3N4S"
};
// console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    signOut(auth);
};
export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
