import { getAnalytics } from 'firebase/analytics';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import firebaseConfig from './firebase-config';

const firebaseApp = initializeApp(firebaseConfig, 'mesher');
export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

// const analytics = getAnalytics(app);
