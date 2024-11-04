using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.DTOs;

namespace TorneoBack.Repository.Contracts
{
    public interface IEquiposRepository
    {
        
        List<Equipo> GetAll();
        bool AddEquipoConJugadores(EquipoDto equipo); // Nuevo método
        bool Update(Equipo equipo);

        //bool Delete(int id);
    }
}
