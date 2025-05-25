// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/// Configuración de Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdTLgIBEAul5d6wAwnzYycumjkGimQGxo",
  authDomain: "inverstart-fbc07.firebaseapp.com",
  projectId: "inverstart-fbc07",
  storageBucket: "inverstart-fbc07.firebasestorage.app",
  messagingSenderId: "896645486301",
  appId: "1:896645486301:web:58988f8302d689ba16ad34",
  measurementId: "G-RMT34T63YL"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/*// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdTLgIBEAul5d6wAwnzYycumjkGimQGxo",
  authDomain: "inverstart-fbc07.firebaseapp.com",
  projectId: "inverstart-fbc07",
  storageBucket: "inverstart-fbc07.appspot.com",
  messagingSenderId: "896645486301",
  appId: "1:896645486301:web:58988f8302d689ba16ad34",
  measurementId: "G-RMT34T63YL"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
*/