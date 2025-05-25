  // Importa los módulos de Firebase
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
  import { getStorage } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js';
  
  // Inicializa Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export { db, storage };


import { db, storage } from './firebase-config.js';
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js';
import { collection, addDoc, getDocs, updateDoc, doc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

// Función para subir imagen o video
async function uploadMedia(file, path) {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef); // URL pública
}

// Guardar datos en Firestore
async function saveBusinessData(businessName, businessSlogan, description, mediaUrls) {
  const docRef = await addDoc(collection(db, "businesses"), {
    businessName,
    businessSlogan,
    description,
    mediaUrls
  });
  console.log("Datos guardados con ID: ", docRef.id);
}
