using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Repository.Contracts;

namespace TorneoBack.Repository
{
    public class EventosRepository : IEventosRepository
    {
        private readonly TorneoContext _context;
        public EventosRepository(TorneoContext context)
        {
            _context = context;
        }

        public bool AddEvento(Evento evento)
        {
            _context.Eventos.Add(evento);
            return _context.SaveChanges() > 0;
        }

        public bool DeleteEvento(int id)
        {
            throw new NotImplementedException();
        }

        public List<Evento> GetByIdPartido(int idPartido)
        {
            return _context.Eventos.Where(e => e.IdPartido == idPartido).ToList();
        }
    }
}
