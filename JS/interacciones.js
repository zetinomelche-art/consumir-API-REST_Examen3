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
}

function openModalEdit() {
    document.getElementById('employeeModalEdit').classList.remove('hidden');
}

function closeModalEdit() {
    document.getElementById('employeeModalEdit').classList.add('hidden');
    document.getElementById('employeeFormEdit').reset();
}