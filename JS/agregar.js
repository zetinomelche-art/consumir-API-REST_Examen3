// Seleccionamos el formulario
const form = document.getElementById('employeeForm');

// Escuchamos el evento submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el refresco de la página

    // Construimos el objeto con los datos del formulario
    const empleado = {
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        dui: form.dui.value,
        telefono: form.telefono.value,
        correo: form.correo.value,
        direccion: form.direccion.value,
        fecha_contratacion: form.fecha_contratacion.value,
        puesto: form.puesto.value,
        salario: parseFloat(form.salario.value),
        estado: "Activo" // Puedes cambiarlo si el form lo incluye
    };

    // Enviamos los datos con fetch
    fetch("http://127.0.0.1:8080/examen3/guardar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(empleado)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al guardar el empleado");
            }
            return response.text(); // El backend devuelve texto, no JSON
        })
        .then(data => {
            alert(data); // Muestra el mensaje: "Empleado guardado exitosamente"
            closeModal(); // Cierra el modal
            form.reset(); // Limpia el formulario
            // Aquí puedes volver a cargar la tabla si lo necesitas:
            // cargarEmpleados();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error al guardar el empleado");
        });
});
