document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelectorAll('.detalles-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      const partidoId = event.target.getAttribute('data-id');
      const equipo1 = encodeURIComponent(event.target.getAttribute('data-equipo1'));
      const equipo2 = encodeURIComponent(event.target.getAttribute('data-equipo2'));

      window.location.href = `/detalles.html?id=${partidoId}&equipo1=${equipo1}&equipo2=${equipo2}`;
      OcultarSecciones();   
    });
  });
});