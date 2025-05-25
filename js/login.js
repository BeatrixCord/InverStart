import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    const docRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || !docSnap.data().interesesCompletados) {
      window.location.href = "intereses.html";
    } else {
      window.location.href = "dashboard.html";
    }
  }
});
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const uid = user.uid;

    return firebase.firestore().collection("usuarios").doc(uid).get();
  })
  .then((doc) => {
    if (doc.exists) {
      const data = doc.data();

      if (data.rol === "inversionista") {
        window.location.href = "dashboard.html";
      } else if (data.rol === "emprendedor") {
        window.location.href = "emprende.html";
      } else {
        alert("Rol no reconocido.");
      }
    } else {
      console.log("No se encontró el documento del usuario.");
    }
  })
  .catch((error) => {
    console.error("Error al iniciar sesión:", error);
  });

