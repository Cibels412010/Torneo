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
                .Where(p => p.Fecha >= DateTime.Today) // Filtra para incluir solo partidos desde el día de hoy en adelante
                .OrderBy(p => p.Fecha) // Ordena por fecha, de la más antigua a la más reciente
                .Take(4) // Toma solo los primeros 4 resultados
                .Select(p => new PartidoDto
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
