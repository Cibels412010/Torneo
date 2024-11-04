using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TorneoApi.Models;

public partial class Equipo
{
    public int IdEquipo { get; set; }

    public string? Nombre { get; set; }

    public DateTime? FechaFundacion { get; set; }

    [JsonIgnore]
    public int? IdCiudad { get; set; } = null;
    [JsonIgnore]
    public virtual ICollection<DirectoresTecnico>? DirectoresTecnicos { get; set; } = null;
    [JsonIgnore]
    public virtual Ciudad? IdCiudadNavigation { get; set; } = null;
    [JsonIgnore]
    public virtual ICollection<Jugador>? Jugadores { get; set; } = null;
    [JsonIgnore]
    public virtual ICollection<Partido>? PartidoEquipo1Navigations { get; set; } = null;
    [JsonIgnore]
    public virtual ICollection<Partido>? PartidoEquipo2Navigations { get; set; } = null;
    [JsonIgnore]
    public virtual ICollection<TorneosXEquipo> ? TorneosXEquipos { get; set; } = null;
}
