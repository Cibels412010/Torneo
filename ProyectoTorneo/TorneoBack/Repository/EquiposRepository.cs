using Microsoft.EntityFrameworkCore;
using System.Net;
using TorneoApi.Models;
using TorneoBack.DTOs;
using TorneoBack.Repository.Contracts;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TorneoBack.Repository
{
    public class EquiposRepository : IEquiposRepository
    {
        private readonly TorneoContext _context;
        public EquiposRepository(TorneoContext context)
        {
            _context = context;
        }
        

        public bool AddEquipoConJugadores(EquipoDto equipoDto)
        {
            using var transaction = _context.Database.BeginTransaction(); // Inicia la transacción
            try
            {
                var equipo = new Equipo
                {
                    Nombre = equipoDto.Nombre,
                    FechaFundacion = equipoDto.FechaFundacion
                };
                
                _context.Equipos.Add(equipo);
                _context.SaveChanges(); // Guarda el torneo primero para obtener el ID

                
                foreach (var jugadorDTO in equipoDto.Jugadores)
                {
                    var j = new Jugador
                    {
                        Nombre = jugadorDTO.Nombre,
                        Apellido = jugadorDTO.Apellido,
                        Dni = jugadorDTO.Dni,
                        FichaMedica = jugadorDTO.FichaMedica,
                        FechaNacimiento = jugadorDTO.FechaNacimiento,
                        IdEquipo = equipo.IdEquipo,
                        IdPosicion = jugadorDTO.IdPosicion,
                        Rol = jugadorDTO.Rol
                    };

                    _context.Jugadores.Add(j);
                }

                _context.SaveChanges(); // Guarda los jugadores
                transaction.Commit(); // Confirmo
                return true;
            }
            catch (Exception)
            {
                transaction.Rollback(); // Revierte la transacción en caso de error
                return false;
            }
        }

        public bool Delete(int id)
        {
            if (_context.Equipos.Any(t => t.IdEquipo == id))
            {
                var equipo = _context.Equipos.Find(id);
                equipo.Borrado = true;
                return _context.SaveChanges() > 0;
            }
            return false;
        }

        public List<Equipo> GetAll()
        {
            return _context.Equipos.Where(t => t.Borrado != true).ToList();
        }

        public Equipo GetById(int id)
        {
            return _context.Equipos.Find(id);
        }

        public bool Update(Equipo equipo)
        {
            if (equipo!=null)
            {
                _context.Equipos.Update(equipo);
                return _context.SaveChanges()>0;

            }
            return false;
        }


        
    }
}
