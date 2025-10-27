const form = document.getElementById('employeeForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
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
        estado: "Activo"
    };

    console.log("Datos a enviar:", empleado);

    fetch("http://127.0.0.1:8080/examen3/guardar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(empleado)
    }).then(data => {
        closeModal();
        form.reset();
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Empleado agregado correctamente.',
        });
        cargarEmpleados();

    })

});
