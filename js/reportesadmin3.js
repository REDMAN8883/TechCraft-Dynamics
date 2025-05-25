// Servicios solicitados (ajustado para veterinaria)
const serviciosSolicitadosCtx = document.getElementById('serviciosSolicitados').getContext('2d');
const serviciosSolicitadosChart = new Chart(serviciosSolicitadosCtx, {
  type: 'pie',
  data: {
    labels: ['Royal canin 15kg', 'Collar antipulgas', 'Vitaminas caninas', 'Juguete dental'],
    datasets: [{
      data: [120, 86, 65, 45], // Proporción de servicios solicitados
      backgroundColor: ['blue', 'green', 'orange', 'red'],
      borderColor: ['#F6F4D2', '#F6F4D2', '#F6F4D2'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
  }
});


