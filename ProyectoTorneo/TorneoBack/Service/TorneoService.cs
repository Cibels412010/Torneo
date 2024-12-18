﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Dtos;
using TorneoBack.DTOs;
using TorneoBack.Repository;
using TorneoBack.Repository.Contracts;
using TorneoBack.Service.Contracts;

namespace TorneoBack.Service
{

    public class TorneoService : ITorneoService
    {
        private readonly ITorneoRepository _torneoRepository;
        private readonly IEquiposRepository _equiposRepository;
        private readonly IJugadorRepository _jugadorRepository;
        private readonly IPartidosRepository _partidosRepository;
        private readonly IEventosRepository _eventosRepository;
        public TorneoService(ITorneoRepository torneoRepository, IJugadorRepository jugadorRepository, IEquiposRepository equiposRepository, IPartidosRepository partidosRepository, IEventosRepository eventosRepository)
        {
            _torneoRepository = torneoRepository;
            _jugadorRepository = jugadorRepository;
            _equiposRepository = equiposRepository;
            _partidosRepository = partidosRepository;
            _eventosRepository = eventosRepository;
        }

               
        public bool AddTorneo(Torneo torneo)
        {
            return _torneoRepository.Add(torneo);
        }            
               
        public bool DeleteTorneo(int id)
        {
            return _torneoRepository.Delete(id);
        }

        public bool DeleteEquipo(int id)
        {
            return _equiposRepository.Delete(id);
        }


        public List<Equipo> GetAllEquipos()
        {
            return _equiposRepository.GetAll();
        }

        public List<Torneo> GetAllTorneos()
        {
            return _torneoRepository.GetAll();
        }
               

        public Torneo getTorneoById(int id)
        {
            return _torneoRepository.GetById(id);
        }

      
        public bool UpdateTorneo(Torneo torneo)
        {
            return _torneoRepository.Update(torneo);
        }

        public EquipoDto GetEquipoById(int id)
        {
            return _equiposRepository.GetById(id);
        }
        public List<JugadorDto> GetByEquipo(string nombreEquipo)
        {
            return _jugadorRepository.GetByEquipo(nombreEquipo);
        }
        public List<VTablaPosicione> GetAllPosiciones()
        {
            return _torneoRepository.GetAllPosiciones();
        }
        public List<Goleadore> GetAllGoleadores()
        {
            return _torneoRepository.GetAllGoleadores();
        }

        public List<VFairPlay> GetAllFairPlay()
        {
            return _torneoRepository.GetAllFairPlay();
        }

        public bool SaveEquipo(EquipoDto equipoDto)
        {
           return _equiposRepository.Save(equipoDto);
        }

        public JugadorDto GetJugadorById(int id)
        {
            return _jugadorRepository.GetById(id);
        }

        public List<PartidoDto> GetAllPartidos()
        {
            return _partidosRepository.GetAllPartidos();
        }

        public List<VResultadoPartido> GetAllResultados()
        {
            return _partidosRepository.GetAllResultados();
        }

        //eventos
        public List<EventoDto> GetEventosByPartido(int id)
        {
            return _eventosRepository.GetByIdPartido(id);
        }
        public bool AddEvento(Evento evento)
        {
            return _eventosRepository.AddEvento(evento);
        }
        public bool DeleteEvento(int id)
        {
            return _eventosRepository.DeleteEvento(id);
        }
    }
}
