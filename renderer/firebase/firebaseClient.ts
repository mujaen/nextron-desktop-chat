import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

// Initialize Firebase
const firebaseClientApp = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const firebaseClientAuth = getAuth(firebaseClientApp)
const db = getFirestore(firebaseClientApp)

export { firebaseClientApp, firebaseClientAuth, db }
