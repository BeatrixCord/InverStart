// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Esperar a que el usuario esté autenticado
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Debe iniciar sesión.");
    window.location.href = "login.html";
    return;
  }

  const form = document.getElementById("formIntereses");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // Obtener todos los valores
    const tipoUsuario = formData.get("tipoUsuario");
    const tipoProyecto = formData.getAll("tipoProyecto"); // varios valores
    const presupuesto = formData.get("presupuesto");
    const plazo = formData.get("plazo");
    const riesgo = formData.get("riesgo");
    const tamanoNegocio = formData.get("tamanoNegocio");
    const negocio = formData.get("negocio");

    const intereses = {
      tipoUsuario,
      tipoProyecto,
      presupuesto,
      plazo,
      riesgo,
      tamanoNegocio,
      negocio,
    };

    try {
      await setDoc(doc(db, "interesesUsuarios", user.uid), intereses);
      alert("Respuestas guardadas correctamente");
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Error al guardar datos:", error);
      alert("Error al guardar datos");
    }
  });
});


