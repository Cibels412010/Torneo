using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TorneoBack.Dtos
{
    public class PartidoDto
    {
        public int IdPartido { get; set; }
        public string NombreEquipo1 { get; set; }
        public string NombreEquipo2 { get; set; }
        public DateTime Fecha { get; set; }
        public int IdCancha { get; set; }
        public string torneo { get; set; }
        public string arbitro { get; set; }
        // Agregar/quitar cualquier campo necesario
    }
}
