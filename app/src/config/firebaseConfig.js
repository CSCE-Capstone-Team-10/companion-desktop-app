/** Loads Firebase configuration & initializes
 *
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// loads environment variables
require('dotenv').config();

// load firebase config
const firebaseConfig = {
  firebaseApiKey: process.env.FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  firebaseAppId: process.env.FIREBASE_APP_ID
};

// Initializing firebase
firebase.initializeApp(firebaseConfig);
