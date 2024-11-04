using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;

namespace TorneoBack.Repository.Contracts
{
    public interface IEquiposRepository
    {
        bool Add(Equipo equipo);
        List<Equipo> GetAll();
        bool Update(Equipo equipo);
        //bool Delete(int id);
    }
}
