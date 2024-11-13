document.addEventListener('DOMContentLoaded', () => {
  
    document.querySelectorAll('.detalles-btn').forEach((button) => {
      button.addEventListener('click', (event) => {
        const partidoId = event.target.getAttribute('data-id');
        window.location.href = `/detalles.html?id=${partidoId}`;
      });
    });
  });