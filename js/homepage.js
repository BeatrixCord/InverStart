/// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyBdTLgIBEAul5d6wAwnzYycumjkGimQGxo",
  authDomain: "inverstart-fbc07.firebaseapp.com",
  projectId: "inverstart-fbc07",
  storageBucket: "inverstart-fbc07.appspot.com",
  messagingSenderId: "896645486301",
  appId: "1:896645486301:web:58988f8302d689ba16ad34",
  measurementId: "G-RMT34T63YL"
};

// Inicializar
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener datos de Firestore con manejo de errores
async function obtenerProyectos() {
  try {
    const snapshot = await getDocs(collection(db, "formEmprendedor"));
    const proyectos = [];
    snapshot.forEach(doc => {
      proyectos.push(doc.data());
    });
    console.log("Proyectos obtenidos:", proyectos);
    return proyectos;
  } catch (error) {
    console.error("❌ Error al obtener los proyectos:", error.message);
    return []; // Devolver array vacío en caso de error
  }
}

// Mostrar tarjetas
function mostrarProyectos(proyectos) {
  const productList = document.getElementById('product-list');

  if (!productList) {
    console.error('❌ Contenedor con ID "product-list" no encontrado en el HTML.');
    return;
  }

  productList.innerHTML = '';

  if (proyectos.length === 0) {
    const mensaje = document.createElement('div');
    mensaje.className = 'no-results';
    mensaje.textContent = 'No se encontraron proyectos para mostrar.';
    productList.appendChild(mensaje);
    return;
  }

  proyectos.forEach(data => {
    // Validar campos necesarios
    if (!data.nombreNegocio || !data.descripcionCorta || !data.ubicacion) return;

    const card = document.createElement('div');
    card.className = 'card';
  
    card.innerHTML = `
      <div class="card-img">
        <img src="${data.imagenURL || 'https://i.ibb.co/8bQbB8z/placeholder.png'}" alt="Imagen de ${data.nombreNegocio}">
      </div>
      <div class="card-info">
        <div class="card-title">${data.nombreNegocio}</div>
        <div class="card-desc">${data.descripcionCorta}</div>
        <small><b>Ubicación:</b> ${data.ubicacion}</small><br>
        <small><b>Dueño:</b> ${data.nombre}</small>
      </div>
      `;

    productList.appendChild(card);

  }); 

}
// Cargar al iniciar
async function cargarYMostrarProyectos() {
  console.log("🔄 Cargando proyectos desde Firestore...");
  const proyectos = await obtenerProyectos();
  mostrarProyectos(proyectos);
}

// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', cargarYMostrarProyectos);
document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach(tarjeta => {
    const btn = tarjeta.querySelector(".ver-mas-btn");
    const id = tarjeta.getAttribute("data-id");

    btn.addEventListener("click", () => {
      // Redirige a detalle.html pasando el ID del proyecto en la URL
      window.location.href = `detalle.html?id=${id}`;
    });
  });
});

