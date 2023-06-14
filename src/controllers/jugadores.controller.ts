import Ciudad from '@models/ciudades.models';
import Equipo from '@models/equipos.models';
import Jugador from '@models/jugadores.models';
import Posicion from '@models/posiciones.models';
import { type Request, type Response } from 'express';

export const obtenerJugadores = async (req: Request, resp: Response) => {
  try {
    const jugadores = await Jugador.findAll({
      attributes: ['id', 'nombre', 'apellido', 'fechaNacimiento', 'edad']
    });
    return resp.status(200).json({ jugadores });
  } catch (error) {
    console.log('ocurrio un error inesperado: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const obtenerJugadoresConRelaciones = async (
  req: Request,
  resp: Response
) => {
  try {
    const jugadores = await Jugador.findAll({
      attributes: ['id', 'nombre', 'apellido', 'fechaNacimiento', 'edad'],
      include: [
        {
          model: Equipo,
          as: 'equipo',
          attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion'],
          include: [{ model: Ciudad, as: 'ciudad', attributes: ['nombre'] }]
        },
        { model: Posicion, as: 'posicion', attributes: ['nombre'] }
      ]
    });
    return resp.status(200).json({ jugadores });
  } catch (error) {
    console.log('ocurrio un error inesperado: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const obtenerJugadorById = async (req: Request, resp: Response) => {
  const { id = '' } = req.params;
  try {
    const jugador = await Jugador.findByPk(id, {
      attributes: ['id', 'nombre', 'apellido', 'fechaNacimiento', 'edad'],
      include: [
        {
          association: 'equipo',
          attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion'],
          include: [{ model: Ciudad, as: 'ciudad', attributes: ['nombre'] }]
        },
        { association: 'posicion', attributes: ['nombre'] }
      ]
    });
    return resp.status(200).json({ jugador });
  } catch (error) {
    console.log('ocurrio un error inesperado: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const crearJugador = async (req: Request, resp: Response) => {
  const { id, edad, ...body } = req.body;

  try {
    const jugador = Jugador.build(body);
    await jugador.save();

    return resp.status(201).json({ jugador });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const actualizarJugador = async (req: Request, resp: Response) => {
  const { id: idBody, edad, ...body } = req.body;
  const { id } = req.params;

  try {
    const jugador = await Jugador.findByPk(id);
    await jugador?.update(body);

    return resp.status(200).json({ jugador });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const eliminarJugador = async (req: Request, resp: Response) => {
  const { id } = req.params;

  try {
    const jugador = await Jugador.findByPk(id);
    await jugador?.destroy();

    return resp.sendStatus(204);
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const obtenerPosiciones = async (req: Request, resp: Response) => {
  try {
    const posiciones = await Posicion.findAll();
    return resp.status(200).json({ posiciones });
  } catch (error) {
    console.log('ocurrio un error: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacta al administrador' });
  }
};
