// Import Firebase and its required services
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7-P2cyoGEwFU_clDK7O10pQ7t1ybyMKo",
  authDomain: "mjlsp-hackaton.firebaseapp.com",
  projectId: "mjlsp-hackaton",
  storageBucket: "mjlsp-hackaton.appspot.com",
  messagingSenderId: "960023586811",
  appId: "1:960023586811:web:24be63dcc893cf86860d5e",
  measurementId: "G-KSNPVHWCCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Export the functions
export { auth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut };
