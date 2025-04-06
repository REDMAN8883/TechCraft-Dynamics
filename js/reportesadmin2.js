// Movimiento de Inventario (ajustado para veterinaria)
const movimientoInventarioCtx = document.getElementById('ventasMes').getContext('2d');
const movimientoInventarioChart = new Chart(movimientoInventarioCtx, {
  type: 'bar',
  data: {
    labels: ['Alimento A', 'Medicina B', 'Accesorio C'], // Categorías
    datasets: [
      {
        label: 'Stock Actual',
        data: [45, 25, 60], // Valores de stock
        backgroundColor: '#A9E5BB', // Color verde
        borderColor: '#A9E5BB',
        borderWidth: 1
      },
      {
        label: 'Ventas',
        data: [30, 15, 25], // Valores de ventas
        backgroundColor: '#F96F5D', // Color rojo
        borderColor: '#F96F5D',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Categorías'
        }
      }
    }
  }
});
