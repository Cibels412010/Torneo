using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TorneoApi.Models;

public partial class Evento
{
    public int IdEvento { get; set; }

    public int? TipoEvento { get; set; }

    public int? IdPartido { get; set; }

    public int? IdJugador { get; set; }

    public short? Minuto { get; set; }
    [JsonIgnore]
    public virtual Jugador? IdJugadorNavigation { get; set; }
    [JsonIgnore]
    public virtual Partido? IdPartidoNavigation { get; set; }
    [JsonIgnore]
    public virtual TiposEvento? TipoEventoNavigation { get; set; }
}
