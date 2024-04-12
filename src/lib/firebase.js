import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'messenger-e96d5.firebaseapp.com',
  projectId: 'messenger-e96d5',
  storageBucket: 'messenger-e96d5.appspot.com',
  messagingSenderId: '953386021119',
  appId: '1:953386021119:web:fdcbaa6640f6e0f696dcca',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
