using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.DTOs;
using TorneoBack.Repository.Contracts;

namespace TorneoBack.Repository
{
   
    public class JugadorRepository : IJugadorRepository
    {
        private readonly TorneoContext _context;
        public JugadorRepository(TorneoContext context)
        {
            _context = context;
        }

        public JugadorDto GetById(int id)
        {
            var jugador = _context.Jugadores.First(j => j.IdJugador == id);
            var jugadorDto = new JugadorDto
            {
                IdJugador = jugador.IdJugador,
                Nombre = jugador.Nombre,
                Apellido = jugador.Apellido,
                Dni = jugador.Dni,
                FichaMedica = jugador.FichaMedica,
                FechaNacimiento = jugador.FechaNacimiento,
                IdEquipo = jugador.IdEquipo,
                IdPosicion = jugador.IdPosicion,
                Rol = jugador.Rol,
                Borrado = jugador.Borrado
            };

            return jugadorDto;
        }
        //GetBy Nombre de Equipo
        public List<JugadorDto> GetByEquipo(string nombreEquipo)
        {
            var jugadores = _context.Jugadores
                .Where(j => j.IdEquipoNavigation.Nombre == nombreEquipo)
                .Select(j => new JugadorDto
                {
                    IdJugador = j.IdJugador,
                    Nombre = j.Nombre,
                    Apellido = j.Apellido,
                    Dni = j.Dni,
                    FichaMedica = j.FichaMedica,
                    FechaNacimiento = j.FechaNacimiento,
                    IdEquipo = j.IdEquipo,
                    IdPosicion = j.IdPosicion,
                    Rol = j.Rol,
                    Borrado = j.Borrado
                })
                .ToList();

            return jugadores;
        }
    }
}
