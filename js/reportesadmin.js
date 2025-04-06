



// Mejores clientes (ajustado para veterinaria)
const mejoresClientesCtx = document.getElementById('mejoresClientes').getContext('2d');
const mejoresClientesChart = new Chart(mejoresClientesCtx, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Meses del año
    datasets: [
      {
        label: 'Ventas del Mes (en $)', // Línea 1
        data: [100, 120, 115], // Datos para Ventas del Mes
        fill: false,
        borderColor: '#7df1c4', // Color de la línea
        tension: 0.1
      },
      {
        label: 'Proyecciones (en $)', // Línea 2
        data: [110, 125, 130, 135, 140, 145], // Datos para Proyecciones
        fill: false,
        borderColor: '#36A2EB', // Color de la línea
        tension: 0.1
      },
      {
        label: 'Tendencias (en $)', // Línea 3
        data: [105, 122, 128, 132, 138, 142], // Datos para Tendencias
        fill: false,
        borderColor: '#FFCE56', // Color de la línea
        tension: 0.1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Coloca la leyenda en la parte superior
      },
      tooltip: {
        mode: 'index', // Muestra información para todas las líneas en un punto
        intersect: false,
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses del Año', // Etiqueta del eje X
        }
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad en $', // Etiqueta del eje Y
        },
        beginAtZero: true // Asegura que el eje Y comience en 0
      }
    }
  }
});










