using Microsoft.AspNetCore.Mvc;
using TorneoApi.Models;
using TorneoBack.Service.Contracts;

namespace TorneoApi.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class EventoController : Controller
    {
        private readonly ITorneoService _servicio;
        public EventoController(ITorneoService servicio)
        {
            _servicio = servicio;
        }

        [HttpGet("Eventos/{idPartido}")]
        public IActionResult GetEventos(int idPartido)
        {
            try
            {
                var eventos = _servicio.GetEventosByPartido(idPartido);
                if (eventos.Count == 0)
                {
                    return NotFound("No se encontraron resultados.");
                }

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
        [HttpPost("Evento")]
        public IActionResult AddEvento([FromBody] Evento evento)
        {
            try
            {
                if (_servicio.AddEvento(evento))
                {
                    return Ok("Evento agregado correctamente.");
                }
                return BadRequest("No se pudo agregar el evento.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
