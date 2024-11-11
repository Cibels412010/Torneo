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
                var partidos = _servicio.GetAllPartidos();
                if (partidos.Count == 0)
                {
                    return NotFound("No se encontraron partidos.");
                }

                return Ok(partidos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("Resultados")]
        public IActionResult GetResultados()
        {
            try
            {
                var resultados = _servicio.GetAllResultados();
                if (resultados.Count == 0)
                {
                    return NotFound("No se encontraron partidos.");
                }

                return Ok(resultados);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
