using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TorneoBack.Dtos
{
    public class EventoDto
    {
        public int IdEvento { get; set; }
        public string TipoEvento { get; set; }
        public int? IdPartido { get; set; }
        public string NombreEquipo { get; set; }
        public string ApellidoJugador { get; set; }
        public string NombreJugador { get; set; }
        public short Minuto { get; set; }
        // Agregar/quitar cualquier campo necesario
    }
}
