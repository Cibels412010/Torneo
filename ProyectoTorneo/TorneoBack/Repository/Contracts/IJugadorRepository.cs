using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;

namespace TorneoBack.Repository.Contracts
{
    public interface IJugadorRepository
    {
        bool Add(Jugador jugador);
        //bool Delete(int id); este deberia ser una baja logica
        public List<Jugador> GetByEquipoId(int equipoId);
        bool Update(Jugador jugador);
        bool Delete(int id);
    }
}
