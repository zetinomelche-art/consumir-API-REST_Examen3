function cargarEmpleados(apiUrl, tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);

    if (!tableBody) {
        console.error(`No se encontró el tbody con id "${tableBodyId}"`);
        return;
    }

    // Función para formatear salario con $
    function formatCurrency(amount) {
        return `$${amount.toLocaleString('es-SV', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    // Función para crear una fila de empleado
    function createRow(emp) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.id_empleado}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.nombre}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.apellido}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.dui}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.telefono}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.correo}</td>
            <td class="px-2 py-3 text-sm text-gray-900">${emp.direccion}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.fecha_contratacion}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${emp.puesto}</td>
            <td class="px-2 py-3 whitespace-nowrap text-sm text-gray-900">${formatCurrency(emp.salario)}</td>
            <td class="px-2 py-3 whitespace-nowrap">
                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${emp.estado === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                    ${emp.estado}
                </span>
            </td>
            <td class="px-2 py-3 whitespace-nowrap text-sm font-medium">
                <button class="edit-btn text-blue-600 hover:text-blue-900 mr-3" data-id="${emp.id_empleado}">Editar</button>
                <button class="text-red-600 hover:text-red-900">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    }

    // Fetch a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                data.forEach(emp => createRow(emp));
            } else {
                createRow(data);
            }
        })
        .catch(error => console.error("Error al obtener empleados:", error));
}

// Ejemplo de uso al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    cargarEmpleados("http://127.0.0.1:8080/examen3/listarEmpleados", "employeeTableBody");
});



