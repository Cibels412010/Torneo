using Microsoft.AspNetCore.Mvc;
using TorneoBack.Repository.Contracts;

namespace TorneoApi.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class JugadorController : Controller
    {
        private readonly ITorneoService _servicio;

        public JugadorController(ITorneoService servicio)
        {
            _servicio = servicio;
        }

        [HttpGet("Jugador/{id}")]
        public IActionResult GetJugadorById(int id)
        {
            try
            {
                var jugador = _servicio.GetJugadorById(id);
                if (jugador == null)
                {
                    return NotFound($"El jugador con ID '{id}' no fue encontrado.");
                }

                return Ok(jugador);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
