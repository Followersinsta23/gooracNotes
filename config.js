// config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCkpSNJP6-puaQsB9H5ZX_pp9alrbR58lI",
  authDomain: "pinga-8bba9.firebaseapp.com",
  projectId: "pinga-8bba9",
  storageBucket: "pinga-8bba9.appspot.com",  // ✅ Corrected from firebasestorage.app
  messagingSenderId: "751196556015",
  appId: "1:751196556015:web:504f02ccc79778c41da91a"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Helper to check if username is already taken
async function isUsernameTaken(username) {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

// 🌐 Export all required
export { app, auth, db, storage, isUsernameTaken };
    