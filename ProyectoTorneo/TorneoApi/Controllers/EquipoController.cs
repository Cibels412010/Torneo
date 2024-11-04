﻿using Microsoft.AspNetCore.Mvc;
using TorneoApi.Models;
using TorneoBack.DTOs;
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


        [HttpPost("CrearTransaction")]
        public IActionResult CreateEquipo([FromBody] EquipoDto equipoDto)
        {
            try
            {
                
                if (equipoDto.FechaFundacion > DateTime.Now)
                {
                    return BadRequest("La fecha de fundación no puede ser posterior a la fecha de hoy.");
                }

                bool eqCreado = _servicio.AddEquipoConJugadores(equipoDto);

                if (!eqCreado)
                {
                    return BadRequest($"No se pudo crear el equipo '{equipoDto.Nombre}'. Verifique los datos e intente nuevamente.");
                }

                return Ok(new { mensaje = "Equipo creado exitosamente.", equipo = equipoDto });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

    }
}
