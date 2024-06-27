// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFhgDSazUdpQ5h-7jyPMVgOhbqYl7hkx8",
    authDomain: "social-media-site-5d26b.firebaseapp.com",
    projectId: "social-media-site-5d26b",
    storageBucket: "social-media-site-5d26b.appspot.com",
    messagingSenderId: "798460778270",
    appId: "1:798460778270:web:457cab0fbaf3667cb7db0f",
    measurementId: "G-K462GBS16B",
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;