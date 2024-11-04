using System;
using System.Collections.Generic;

namespace TorneoApi.Models;

public partial class Jugador
{
    public int IdJugador { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public int? Dni { get; set; }

    public bool? FichaMedica { get; set; }

    public int? IdEquipo { get; set; }

    public int? IdObraSocial { get; set; }

    public int? IdCiudad { get; set; }

    public DateTime? FechaNacimiento { get; set; }

    public int? IdPosicion { get; set; }

    public int? Rol { get; set; }

    public virtual ICollection<ContactosJugadore> ContactosJugadores { get; set; } = new List<ContactosJugadore>();

    public virtual ICollection<Evaluacione> Evaluaciones { get; set; } = new List<Evaluacione>();

    public virtual ICollection<Evento> Eventos { get; set; } = new List<Evento>();

    public virtual Ciudad? IdCiudadNavigation { get; set; }

    public virtual Equipo? IdEquipoNavigation { get; set; }

    public virtual ObrasSociale? IdObraSocialNavigation { get; set; }

    public virtual PosicionesJuego? IdPosicionNavigation { get; set; }

    public virtual ICollection<Pago> Pagos { get; set; } = new List<Pago>();

    public virtual TiposRole? RolNavigation { get; set; }
}
