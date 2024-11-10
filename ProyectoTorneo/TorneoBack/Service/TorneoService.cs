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
        public TorneoService(ITorneoRepository torneoRepository, IJugadorRepository jugadorRepository, IEquiposRepository equiposRepository, IPartidosRepository partidosRepository)
        {
            _torneoRepository = torneoRepository;
            _jugadorRepository = jugadorRepository;
            _equiposRepository = equiposRepository;
            _partidosRepository = partidosRepository;
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
    }
}
