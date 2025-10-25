document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('employeeTableBody');
    const form = document.getElementById('employeeForm');

    tableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const id = event.target.dataset.id;
            const apiUrl = "http://127.0.0.1:8080/examen3/editar/" + id;

            // Abrimos el modal
            openModal();

            // Obtenemos datos del empleado
            fetch(apiUrl)
                .then(response => response.json())
                .then(emp => {
                    // Rellenamos los campos del formulario
                    document.getElementById("titulo_form_edit_add").textContent = "Editar Empleado";
                    form.id_empleado.value = emp.id_empleado;
                    form.nombre.value = emp.nombre;
                    form.apellido.value = emp.apellido;
                    form.dui.value = emp.dui;
                    form.telefono.value = emp.telefono;
                    form.correo.value = emp.correo;
                    form.fecha_contratacion.value = emp.fecha_contratacion;
                    form.puesto.value = emp.puesto;
                    form.salario.value = emp.salario;
                    form.direccion.value = emp.direccion;

                })
                .catch(error => console.error("Error al obtener empleado:", error));
        }
    });

    // Opcional: submit del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const id = form.dataset.id;

        // Aquí enviarías los datos editados a tu API con PUT o POST
        console.log("Enviar actualización para empleado id:", id);

        // Cerrar modal tras enviar
        closeModal();
    });
});
