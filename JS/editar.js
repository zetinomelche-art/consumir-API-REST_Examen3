document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('employeeTableBody');
    const form = document.getElementById('employeeFormEdit');


    tableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const id = event.target.dataset.id;
            const apiUrl = "http://127.0.0.1:8080/examen3/editar/" + id;

            openModalEdit();

            fetch(apiUrl)
                .then(response => response.json())
                .then(emp => {
                    form.id_empleadoEdit.value = emp.id_empleado;
                    form.nombreEdit.value = emp.nombre;
                    form.apellidoEdit.value = emp.apellido;
                    form.duiEdit.value = emp.dui;
                    form.telefonoEdit.value = emp.telefono;
                    form.correoEdit.value = emp.correo;
                    form.fecha_contratacionEdit.value = emp.fecha_contratacion;
                    form.puestoEdit.value = emp.puesto;
                    form.salarioEdit.value = emp.salario;
                    form.direccionEdit.value = emp.direccion;
                    form.estadoEdit.value = emp.estado;
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema al cargar los datos del empleado.',
                    });
                });
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const empleadoEditado = {
            id_empleado: parseInt(form.id_empleadoEdit.value),
            nombre: form.nombreEdit.value,
            apellido: form.apellidoEdit.value,
            dui: form.duiEdit.value,
            telefono: form.telefonoEdit.value,
            correo: form.correoEdit.value,
            direccion: form.direccionEdit.value,
            fecha_contratacion: form.fecha_contratacionEdit.value,
            puesto: form.puestoEdit.value,
            salario: parseFloat(form.salarioEdit.value),
            estado: form.estadoEdit.value
        };

        const id = empleadoEditado.id_empleado;
        console.log("Datos editados:", {
            id_empleado: id,
            nombre: empleadoEditado.nombre,
            apellido: empleadoEditado.apellido,
            dui: empleadoEditado.dui,
            telefono: empleadoEditado.telefono,
            correo: empleadoEditado.correo,
            direccion: empleadoEditado.direccion,
            fecha_contratacion: empleadoEditado.fecha_contratacion,
            puesto: empleadoEditado.puesto,
            salario: empleadoEditado.salario,
            estado: empleadoEditado.estado
        });


        fetch("http://127.0.0.1:8080/examen3/guardar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify(empleadoEditado)
            }
        ).then(data => {
            closeModalEdit();
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Empleado agregado correctamente.',
            });
            cargarEmpleados();
        });
    });
});
