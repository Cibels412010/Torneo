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
            return _context.Partidos
                .OrderBy(p => p.Fecha)
                .Select(p => new PartidoDto
                {
                    IdPartido = p.IdPartido,
                    NombreEquipo1 = p.Equipo1Navigation != null ? p.Equipo1Navigation.Nombre : "Desconocido",
                    NombreEquipo2 = p.Equipo2Navigation != null ? p.Equipo2Navigation.Nombre : "Desconocido",
                    Fecha = p.Fecha ?? new DateTime(1753, 1, 1),
                    IdCancha = p.IdCancha ?? 0,
                    torneo = p.IdTorneoNavigation != null ? p.IdTorneoNavigation.Nombre : "Sin Torneo",
                    arbitro = p.IdArbitroNavigation != null ? p.IdArbitroNavigation.Apellido : "Sin Árbitro",
                    n_fecha = p.N_fecha ?? 0
                })
                .ToList();
        }


        public List<VResultadoPartido> GetAllResultados()
        {
            return _context.VResultadoPartidos
                .OrderByDescending(r => r.IdPartido) // Ordena por ID en orden descendente
                .ToList();
        }
    }
}
