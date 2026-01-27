import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBdtoqHlGxQ69MItc03SJA5Bu7lmibEEjs',
  authDomain: 'iwconnect-twitter.firebaseapp.com',
  projectId: 'iwconnect-twitter',
  storageBucket: 'iwconnect-twitter.firebasestorage.app',
  messagingSenderId: '865684144313',
  appId: '1:865684144313:web:41666cdcaeb26c2fd55b68',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
