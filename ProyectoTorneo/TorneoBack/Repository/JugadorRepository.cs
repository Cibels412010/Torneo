using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
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
        public bool Add(Jugador jugador)
        {
            if (jugador != null)
            {

                _context.Jugadores.Add(jugador);

                return _context.SaveChanges() > 0;
            }
            return false;
        }

        public bool Delete(int id){
            var jugador = _context.Jugadores.Find(id);
            if (jugador != null)
            {
                jugador.Borrado = true;
                return _context.SaveChanges() > 0;
            }
            return false;
        }

        //public bool Delete(int id)
        //{
        //    var jugador = _context.Jugadores.Find(id);
        //    if (jugador != null)
        //    {
        //        _context.Jugadores.Remove(jugador);
        //        return _context.SaveChanges() > 0   ;
        //    }
        //    return false;

        //}

        public List<Jugador> GetByEquipoId(int equipoId)
        {
            return _context.Jugadores.Where(j => j.IdEquipo == equipoId).ToList();
        }

        public bool Update(Jugador jugador)
        {
            if (jugador!=null)
            {
                _context.Jugadores.Update(jugador);
                return _context.SaveChanges()>0;
            }
            return false;

        }
    }
}
