document.addEventListener("DOMContentLoaded", () => {

    const apiUrl_TotalEpm = "http://127.0.0.1:8080/examen3/estadisticas/total";
    const totalEmpleadosElem = document.getElementById("totalEmpleados");

    fetch(apiUrl_TotalEpm)
        .then(response => response.json())
        .then(data => {
            totalEmpleadosElem.textContent = data;
        });



    consApiUrl_EstadoEmpleados = "http://127.0.0.1:8080/examen3/estadisticas/estados";
    const empActivos = document.getElementById("empleadosActivos");
    const empInactivos = document.getElementById("empleadosInactivos");

    /*

    //Semaneja un arreglo de objetos como el siguiente

    [
    {
        "cantidad": 11,
        "estado": "Activo"
    },
    {
        "estado": "Inactivo",
        "cantidad": 1
    }
]    */

    fetch(consApiUrl_EstadoEmpleados)
        .then(response => response.json())
        .then(data => {
            data.forEach(estadoObj => {
                if (estadoObj.estado === "Activo") {
                    empActivos.textContent = estadoObj.cantidad;
                } else if (estadoObj.estado === "Inactivo") {
                    empInactivos.textContent = estadoObj.cantidad;
                }
            });
        });


    const apiUrl_SalarioPromedio = "http://127.0.0.1:8080/examen3/estadisticas/salarioPromedio";
    const salarioPromedioElem = document.getElementById("salarioPromedio");

    fetch(apiUrl_SalarioPromedio)
        .then(response => response.json())
        .then(data => {
            salarioPromedioElem.textContent = `$${data.toFixed(2)}`;
        });


    const apiUrl_antiguedadPromedio = "http://127.0.0.1:8080/examen3/estadisticas/antiguedadPromedio";
    const antiguedadPromedioElem = document.getElementById("antiguedadPromedio");

    fetch(apiUrl_antiguedadPromedio)
        .then(response => response.json())
        .then(data => {
            antiguedadPromedioElem.textContent = `${data.toFixed(2)} años`;
        });


    const apiUrl_empleadosPorPuesto = "http://127.0.0.1:8080/examen3/estadisticas/puestos";
    const ctx = document.getElementById('graficoEmpleadosPuesto').getContext('2d');

    fetch(apiUrl_empleadosPorPuesto)
        .then(response => response.json())
        .then(data => {
            const puestos = data.map(item => item.puesto);
            const cantidades = data.map(item => item.cantidad);

            // Paleta de colores para las barras (puedes usar Tailwind colors)
            const colores = [
                'rgba(59, 130, 246, 0.7)',  // azul
                'rgba(16, 185, 129, 0.7)',  // verde
                'rgba(234, 179, 8, 0.7)',   // amarillo
                'rgba(236, 72, 153, 0.7)',  // rosa
                'rgba(14, 165, 233, 0.7)'   // celeste
            ];

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: puestos,
                    datasets: [{
                        label: 'Número de Empleados',
                        data: cantidades,
                        backgroundColor: colores,
                        borderColor: colores.map(c => c.replace('0.7', '1')), // bordes más intensos
                        borderWidth: 1,
                        borderRadius: 6, // bordes redondeados
                        hoverBackgroundColor: colores.map(c => c.replace('0.7', '0.9')) // efecto hover
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            titleColor: '#fff',
                            bodyColor: '#fff',
                            padding: 10,
                            cornerRadius: 6
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                precision: 0,
                                stepSize: 1
                            },
                            grid: {
                                drawBorder: false,
                                color: 'rgba(0,0,0,0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        });


});