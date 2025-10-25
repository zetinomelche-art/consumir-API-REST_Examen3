function showSection(section) {
    document.getElementById('empleados-section').classList.add('hidden');
    document.getElementById('estadisticas-section').classList.add('hidden');
    document.getElementById(section + '-section').classList.remove('hidden');
}

function openModal() {
    document.getElementById('employeeModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('employeeModal').classList.add('hidden');
    document.getElementById('employeeForm').reset();
    document.getElementById("titulo_form_edit_add").textContent = "Agregar Empleado";
}
