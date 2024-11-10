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
    public class PartidosRepository : IPartidosRepository
    {
        private readonly TorneoContext _context;
        public PartidosRepository(TorneoContext context)
        {
            _context = context;
        }
        public List<PartidoDto> GetAllPartidos()
        {
            return _context.Partidos.Select(p => new PartidoDto
            {
                IdPartido = p.IdPartido,
                NombreEquipo1 = p.Equipo1Navigation.Nombre,
                NombreEquipo2 = p.Equipo2Navigation.Nombre,
                Fecha = (DateTime)p.Fecha,
                IdCancha = (int)p.IdCancha,
                torneo = p.IdTorneoNavigation.Nombre,
                arbitro = p.IdArbitroNavigation.Apellido
            })
        .ToList();
        }
    }
}
