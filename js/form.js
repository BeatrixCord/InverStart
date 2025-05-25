// El resto de tu código permanece igual
const form = document.getElementById('proyectoForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcionCorta = document.getElementById('descripcionCorta').value;
    const descripcionLarga = document.getElementById('descripcionLarga').value;
    const categoria = document.getElementById('categoria').value;
    const ubicacion = document.getElementById('ubicacion').value;

    try {
        await addDoc(collection(db, "formEmprendedor"), {
            nombre,
            descripcionCorta,
            descripcionLarga,
            categoria,
            ubicacion,
            fecha: new Date()
        });
        alert("¡Proyecto guardado exitosamente!");
        form.reset();
    } catch (error) {
        console.error("Error al guardar en Firestore:", error);
        alert("Ocurrió un error al guardar el proyecto.");
    }
});