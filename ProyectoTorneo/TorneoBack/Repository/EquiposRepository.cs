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
    public class EquiposRepository : IEquiposRepository
    {
        private readonly TorneoContext _context;
        public EquiposRepository(TorneoContext context)
        {
            _context = context;
        }
        public bool Add(Equipo equipo)
        {

            if (equipo != null)
            {

                _context.Equipos.Add(equipo);
                
                return _context.SaveChanges() >0 ;
            }
            return false;

        }

        //public bool Delete(int id)
        //{
        //    var equipo = _context.Equipos.Find(id);

        //    if (equipo != null)
        //    {
        //        _context.Equipos.Remove(equipo);
        //        return _context.SaveChanges() > 0;
        //    }
        //    return false;
        //}

        public List<Equipo> GetAll()
        {
            return _context.Equipos.Include(e => e.Jugadores).ToList();
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
