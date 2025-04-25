import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAV6cIm9Ftrsby5vhm7LKG4OPcLwzrg1fI",
  authDomain: "frameworks-498a2.firebaseapp.com",
  projectId: "frameworks-498a2",
  storageBucket: "frameworks-498a2.firebasestorage.app",
  messagingSenderId: "892243442547",
  appId: "1:892243442547:web:c058fa12ef1b89650a6306"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
