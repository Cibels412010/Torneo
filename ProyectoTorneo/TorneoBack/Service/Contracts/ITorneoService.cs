using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Dtos;
using TorneoBack.DTOs;

namespace TorneoBack.Service.Contracts
{
    public interface ITorneoService
    {
        //torneos
        bool AddTorneo(Torneo torneo);
        List<Torneo> GetAllTorneos();
        bool UpdateTorneo(Torneo torneo);
        bool DeleteTorneo(int id);
        Torneo getTorneoById(int id);

        //vistas dashboard
        List<VTablaPosicione> GetAllPosiciones();
        List<Goleadore> GetAllGoleadores();
        List<VFairPlay> GetAllFairPlay();


        //equipos
        bool SaveEquipo(EquipoDto equipoDto);
        List<Equipo> GetAllEquipos();

        bool DeleteEquipo(int id);
        EquipoDto GetEquipoById(int id);

        //jugadores
        JugadorDto GetJugadorById(int id);
        public List<JugadorDto> GetByEquipo(string nombreEquipo);

        //partidos
        List<PartidoDto> GetAllPartidos();
        List<VResultadoPartido> GetAllResultados();

        //eventos
        List<EventoDto> GetEventosByPartido(int id);
        bool AddEvento(Evento evento);
        bool DeleteEvento(int id);
    }
}


