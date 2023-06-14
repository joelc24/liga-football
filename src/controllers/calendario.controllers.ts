import { type Request, type Response } from 'express';
import { getSocketServer } from '@utils/socket-server';
import Calendario from '@models/calendario.models';
import Equipo from '@models/equipos.models';
import { calendarioGenerado } from '@helpers/generar-calendario';

export const generarData = async (req: Request, resp: Response) => {
  try {
    const equipos = (await Equipo.findAll({ attributes: ['id'] })).map(
      (equipo) => ({ id: equipo.toJSON().id })
    );

    if (!equipos.length) {
      return resp
        .status(400)
        .json({ msg: 'No hay equipos para generar el calendario' });
    }

    const calendario = await calendarioGenerado(
      equipos as Array<{ id: number }>
    );

    const io = getSocketServer();

    io.emit('server:nuevo-calendario', calendario);

    return resp.status(200).json({ calendario });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};

export const obtenerCalendario = async (req: Request, resp: Response) => {
  try {
    const calendario = await Calendario.findAll({
      attributes: [
        'id',
        'fechaPartido',
        'fecha',
        'hora',
        'idEquipoLocal',
        'idEquipoVisitante'
      ],
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
    });

    return resp.status(200).json({ calendario });
  } catch (error) {
    console.log('ocurrio un error: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};

export const obtenerJugadoresPartido = async (req: Request, resp: Response) => {
  const { id } = req.params;

  try {
    const jugadoresPartido = await Calendario.findByPk(id, {
      attributes: [],
      include: [
        {
          association: 'equipoLocal',
          attributes: ['id', 'nombre'],
          include: [
            {
              association: 'jugadores',
              attributes: ['id', 'nombre', 'apellido']
            }
          ]
        },
        {
          association: 'equipoVisitante',
          attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion'],
          include: [
            {
              association: 'jugadores',
              attributes: ['id', 'nombre', 'apellido']
            }
          ]
        }
      ]
    });

    return resp.status(200).json({ jugadoresPartido });
  } catch (error) {
    console.log('ocurrio un error: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};

export const insertarCalendario = async (req: Request, resp: Response) => {
  const { id, ...body } = req.body;

  try {
    const calendarioToDb = Calendario.build(body);
    await calendarioToDb.save();

    const { createdAt, updatedAt, ...calendario } = calendarioToDb.toJSON();

    return resp.status(201).json({ calendario });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};

export const insercionMasiva = async (req: Request, resp: Response) => {
  const { calendarios } = req.body;

  try {
    await Calendario.bulkCreate(calendarios);
    return resp
      .status(201)
      .json({ msg: 'insercion masiva realizada con exito' });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};
