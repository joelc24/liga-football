import { goleResultadosGenerados } from '@helpers/generar-goles';
import Gol from '@models/gol.models';
import { type Response, type Request } from 'express';

export const obtenerGoles = async (req: Request, resp: Response) => {
  try {
    const goles = await Gol.findAll({
      attributes: ['id', 'minuto'],
      include: [
        {
          association: 'partido',
          attributes: ['id', 'fecha', 'fechaPartido', 'hora'],
          include: [
            {
              association: 'equipoLocal',
              attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion']
            },
            {
              association: 'equipoVisitante',
              attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion']
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

export const generarGoles = async (req: Request, resp: Response) => {
  try {
    const data = await goleResultadosGenerados();

    return resp.status(200).json(data);
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};

export const insertarGol = async (req: Request, resp: Response) => {
  try {
    const { id, ...body } = req.body;

    const golFromDb = Gol.build(body);
    await golFromDb.save();

    const { createdAt, updatedAt, ...gol } = golFromDb.toJSON();

    return resp.status(200).json({ gol });
  } catch (error) {
    console.log('ocurrio un error: ', error);
    return resp
      .status(500)
      .json({ msg: 'ocurrio un error contacte al administrador' });
  }
};
