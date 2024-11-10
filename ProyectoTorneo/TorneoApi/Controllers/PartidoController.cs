using Microsoft.AspNetCore.Mvc;
using TorneoBack.Service.Contracts;

namespace TorneoApi.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class PartidoController : Controller
    {
        private readonly ITorneoService _servicio;
        public PartidoController(ITorneoService servicio)
        {
            _servicio = servicio;
        }

        [HttpGet("Partidos")]
        public IActionResult GetPartidos()
        {
            try
            {
                var torneos = _servicio.GetAllPartidos();
                if (torneos.Count == 0)
                {
                    return NotFound("No se encontraron partidos.");
                }

                return Ok(torneos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
