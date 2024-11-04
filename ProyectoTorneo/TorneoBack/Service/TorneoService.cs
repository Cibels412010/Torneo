using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Repository;
using TorneoBack.Repository.Contracts;

namespace TorneoBack.Service
{
   
    public class TorneoService : ITorneoService
    {
        private readonly ITorneoRepository _torneoRepository;
        private readonly IEquiposRepository _equiposRepository;
        private readonly IJugadorRepository _jugadorRepository;
        public TorneoService(ITorneoRepository torneoRepository, IJugadorRepository jugadorRepository, IEquiposRepository equiposRepository)
        {
            _torneoRepository = torneoRepository;
            _jugadorRepository = jugadorRepository;
            _equiposRepository = equiposRepository;
        }

        public bool AddEquipo(Equipo equipo)
        {
            return _equiposRepository.Add(equipo);
        }

        public bool AddJugador(Jugador jugador)
        {
            return _jugadorRepository.Add(jugador);
        }

        public bool AddTorneo(Torneo torneo)
        {
            return _torneoRepository.Add(torneo);
        }

        public bool DeleteEquipo(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteJugador(int id)
        {
            throw new NotImplementedException();
        }

        public bool DeleteTorneo(int id)
        {
            throw new NotImplementedException();
        }

        //public bool DeleteEquipo(int id)
        //{
        //    return _equiposRepository.Delete(id);
        //}

        //public bool DeleteJugador(int id)
        //{
        //    return _jugadorRepository.Delete(id);
        //}

        public List<Equipo> GetAllEquipos()
        {
            return _equiposRepository.GetAll();
        }

        public List<Torneo> GetAllTorneos()
        {
            return _torneoRepository.GetAll();
        }

        public List<Jugador> GetJugadorByEquipoId(int equipoId)
        {
            return _jugadorRepository.GetByEquipoId(equipoId);
        }

        public Torneo getTorneoById(int id)
        {
            return _torneoRepository.GetById(id);
        }

        public bool UpdateEquipo(Equipo equipo)
        {
           return _equiposRepository.Update(equipo);
        }

        public bool UpdateJugador(Jugador jugador)
        {
            return _jugadorRepository.Update(jugador);
        }

        public bool UpdateTorneo(Torneo torneo)
        {
            return _torneoRepository.Update(torneo);
        }
    }
}
