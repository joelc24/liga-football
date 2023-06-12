import Calendario from '@models/calendario.models';
import Equipo from '@models/equipos.models';
import Gol from '@models/gol.models';
import { type Response, type Request } from 'express';

export const obtenerGoles = async (req: Request, resp: Response) => {
  try {
    const goles = await Gol.findAll({
      attributes: ['id', 'minuto'],
      include: [
        {
          model: Calendario,
          as: 'partido',
          attributes: ['id', 'fecha', 'hora'],
          include: [
            {
              model: Equipo,
              as: 'equipo_local',
              attributes: ['id', 'nombre', 'nombre_completo', 'fundacion']
            },
            {
              model: Equipo,
              as: 'equipo_visitante',
              attributes: ['id', 'nombre', 'nombre_completo', 'fundacion']
            }
          ]
        }
      ]
    });
    return resp.status(200).json({ goles });
  } catch (error) {
    console.log('ocurrio un error: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};
