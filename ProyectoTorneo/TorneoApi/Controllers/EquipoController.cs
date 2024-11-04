using Microsoft.AspNetCore.Mvc;
using TorneoApi.Models;
using TorneoBack.Repository.Contracts;

namespace TorneoApi.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class EquipoController : Controller
    {
        private readonly ITorneoService _servicio;

        public EquipoController(ITorneoService servicio)
        {
            _servicio = servicio;
        }


        [HttpPost("Crear")]
        public IActionResult CreateEquipo([FromBody] Equipo equipo)
        {
            try
            {
                if (equipo.FechaFundacion > DateTime.Now)
                {
                    return BadRequest("La fecha de fundación no puede ser posterior a la fecha hoy.");
                }

                bool eqCreado = _servicio.AddEquipo(equipo);

                if (!eqCreado)
                {
                    return BadRequest($"No se pudo crear el equipo '{equipo.Nombre}'. Verifique los datos e intente nuevamente.");
                }

                return Ok(new { mensaje = "Equipo creado exitosamente.", equipo });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
