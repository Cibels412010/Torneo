﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TorneoBack.Service.Contracts;

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
        [HttpGet("Jugador/Equipo/{nombreEquipo}")]
        public IActionResult GetByEquipo(string nombreEquipo)
        {
            try
            {
                var jugadores = _servicio.GetByEquipo(nombreEquipo);
                if (jugadores == null)
                {
                    return NotFound($"No se encontraron jugadores para el equipo '{nombreEquipo}'.");
                }

                return Ok(jugadores);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
