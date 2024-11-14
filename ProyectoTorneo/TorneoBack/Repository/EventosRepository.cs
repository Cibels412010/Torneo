using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Dtos;
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
            Evento evento = _context.Eventos.FirstOrDefault(e => e.IdEvento == id);
            if (evento == null)
            {
                return false;
            }
            else
            {
                _context.Eventos.Remove(evento);
                return _context.SaveChanges() > 0;
            }
        }

        public List<EventoDto> GetByIdPartido(int idPartido)
        {
            return _context.Eventos
                .Where(e => e.IdPartido == idPartido)
                .Select(e => new EventoDto
                {
                    IdEvento = e.IdEvento,
                    TipoEvento = e.TipoEventoNavigation.Descripcion,
                    IdPartido = e.IdPartido,
                    NombreEquipo = e.IdJugadorNavigation.IdEquipoNavigation.Nombre,
                    ApellidoJugador = e.IdJugadorNavigation.Apellido,
                    NombreJugador = e.IdJugadorNavigation.Nombre,
                    Minuto = (short)e.Minuto
                }
                ).ToList();
        }
    }
}
