using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.DTOs;

namespace TorneoBack.Repository.Contracts
{
    public interface ITorneoService
    {
        //torneos
        bool AddTorneo(Torneo torneo);
        List<Torneo> GetAllTorneos();
        bool UpdateTorneo(Torneo torneo);
        bool DeleteTorneo(int id);
        Torneo getTorneoById(int id);

        //equipos
        bool AddEquipoConJugadores(EquipoDto equipoDto);
        List<Equipo> GetAllEquipos();
        bool UpdateEquipo(Equipo equipo);
        bool DeleteEquipo(int id);
        Equipo GetEquipoById(int id);

        //jugadores
        bool AddJugador(Jugador jugador);
        bool DeleteJugador(int id);
        public List<Jugador> GetJugadorByEquipoId(int equipoId);
        bool UpdateJugador(Jugador jugador);
    }
}


