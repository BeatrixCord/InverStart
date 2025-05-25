function generarID(){
  return Math.floor(10000 + Math.random()* 90000)
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("registroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;
  const edad = document.getElementById("fechaNacimiento").value;
  const dui = document.getElementById("documentoIdentidad").value;
  const telefono = document.getElementById("telefono").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, correo, contrasena);
    const user = userCredential.user;

    await setDoc(doc(db, "usuarios", user.uid), {
      nombre,
      correo,
      fehaNacimiento,
      documentoIdentidad,
      telefono,
      tipoUsuario
    });

    alert("Registro exitoso.");

    if (tipoUsuario == "Inversor") {
      window.location.href = "intereses.html"; // Redirige al formulario de intereses //debe redirigir a formulario emprendedor o invercionista
    } else {
      window.location.href = "formEmprendedor.html";
    }

  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Este correo ya está registrado.");
    } else {
      console.error("Error en el registro:", error);
      alert("Error al registrar usuario.");
    }
  }
});


