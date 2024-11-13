using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Dtos;

namespace TorneoBack.Repository.Contracts
{
    public interface IEventosRepository
    {
        List<EventoDto> GetByIdPartido(int idPartido);
        bool AddEvento(Evento evento);
        bool DeleteEvento(int id);
    }
}
