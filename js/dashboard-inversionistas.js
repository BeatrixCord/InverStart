// Importar la configuración y el db
import { db } from './firebaseConfig.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Obtener el contenedor donde se mostrarán los proyectos
const container = document.getElementById('proyectos-container');

// Función para cargar los proyectos desde Firebase
async function cargarProyectos() {
  const querySnapshot = await getDocs(collection(db, "proyectos"));

  querySnapshot.forEach((doc) => {
    const proyecto = doc.data();

    // Crear una tarjeta para mostrar cada proyecto
    const card = document.createElement('div');
    card.className = 'proyecto-card';
    card.innerHTML = `
      <img src="${proyecto.imagen_url}" alt="${proyecto.nombre}" />
      <h3>${proyecto.nombre}</h3>
      <p>${proyecto.descripcion}</p>
      <p><strong>Tipo:</strong> ${proyecto.tipo}</p>
      <p><strong>Meta:</strong> $${proyecto.monto_requerido}</p>
      <button>Invertir</button>
    `;

    // Agregar la tarjeta al contenedor
    container.appendChild(card);
  });
}

// Llamar la función para cargar los proyectos
cargarProyectos();
