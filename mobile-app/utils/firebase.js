import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore/lite';

// add firebase config
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId,
};

// initialize firebase
export const app = initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();
// export const fireDB = app.firestore();
export const db = getFirestore(app);

export { auth };
