using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TorneoApi.Models;
using TorneoBack.Dtos;

namespace TorneoBack.Repository.Contracts
{
    public interface IPartidosRepository
    {
        List<PartidoDto> GetAllPartidos();
        List<VResultadoPartido> GetAllResultados();
    }
}
