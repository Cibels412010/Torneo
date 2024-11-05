using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Repository.Contracts;

namespace TorneoBack.Repository
{
    
    public class TorneoRepository : ITorneoRepository
    {
        private readonly TorneoContext _context;
        public TorneoRepository(TorneoContext context)
        {
            _context = context;
        }
        public bool Add(Torneo torneo)
        {
            if (torneo != null)
            {
                _context.Torneos.Add(torneo);
                return _context.SaveChanges()>0;
            }
            return false;
        }

        public bool Delete(int id)
        {
            if(_context.Torneos.Any(t => t.IdTorneo == id))
            {
                var torneo = _context.Torneos.Find(id);
                torneo.Borrado = true;
                return _context.SaveChanges() > 0;
            }
            return false;
        }
        public List<VTablaPosicione> GetAllPosiciones()
        {
            return _context.VTablaPosiciones.OrderByDescending(t => t.Puntos).ToList();
        }

        public List<Torneo> GetAll()
        {
            return _context.Torneos.Where(t => t.Borrado != true).ToList();
        }

        public Torneo GetById(int id)
        {
            return _context.Torneos.Find(id);
        }    

        public bool Update(Torneo torneo)
        {
            if (torneo!=null)
            {
                _context.Torneos.Update(torneo);
                return _context.SaveChanges() > 0;
            }
            return false;
        }
    }
}
