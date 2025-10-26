const tableBodyElim = document.getElementById('employeeTableBody');

tableBodyElim.addEventListener('click', function (event) {

    console.log("Click detectado en tabla para eliminar");

    if (event.target.classList.contains('delete-btn')) {

        const id = event.target.dataset.id;
        const apiUrl = "http://127.0.0.1:8080/examen3/elim/" + id;
        // Confirmación antes de eliminar
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        }).then((result) => {
            if (result.isConfirmed) {
                // Realizar la petición DELETE
                fetch(apiUrl, {
                    method: 'DELETE'
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Error al eliminar el empleado");
                        }
                        return response.text();
                    })
                    .then(data => {
                        Swal.fire(
                            'Eliminado',
                            data,
                            'success'
                        ).then(() => {
                            cargarEmpleados();
                        }
                        );
                    })
                    .catch(error => {
                        console.error("Error:", error);
                        Swal.fire(
                            'Error',
                            'Hubo un problema al eliminar el empleado.',
                            'error'
                        );
                    });
            }
        });
    }
});