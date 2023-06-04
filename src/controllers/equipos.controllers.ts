import { type Request, type Response } from 'express';
import { Sequelize, ValidationError } from 'sequelize';

import { type IError } from '@interfaces/error.interface';

import { formatErrorsSequelize } from '@helpers/formatear-errors-sequelize';
import Equipo from '@models/equipos.models';
import Ciudad from '@models/ciudades.models';
import Jugador from '@models/jugadores.models';
import Posicion from '@models/posiciones.models';
import ContactoEquipo from '@models/contacto_equipo';

export const getEquipos = async (req: Request, resp: Response) => {
  try {
    const equipos = await Equipo.findAll({
      attributes: ['id', 'nombre', 'nombre_completo', 'fundacion']
    });

    return resp.status(200).json({ equipos });
  } catch (error) {
    console.log('Ocurrio un error inesperado', error);
    return resp.status(500).json({
      msg: 'Ocurrio un error inesperado, contacte al administrador'
    });
  }
};

export const obtenerEquipos = async (req: Request, resp: Response) => {
  try {
    const equipos = await Equipo.findAll({
      attributes: ['id', 'nombre', 'nombre_completo', 'fundacion'],
      include: [
        {
          model: ContactoEquipo,
          as: 'contacto',
          attributes: [
            'direccion_oficina',
            'pagina_web',
            [
              Sequelize.literal('GROUP_CONCAT(link_red_social SEPARATOR ", ")'),
              'redesSociales'
            ]
          ]
        },
        { model: Ciudad, as: 'ciudad', attributes: ['id', 'nombre'] },
        {
          model: Jugador,
          as: 'jugadores',
          attributes: ['id', 'nombre', 'apellido', 'fecha_nacimiento', 'edad'],
          include: [
            { model: Posicion, as: 'posicion', attributes: ['id', 'nombre'] }
          ]
        }
      ],
      group: [
        'equipos.id',
        'equipos.nombre',
        'equipos.nombre_completo',
        'equipos.fundacion'
      ]
    });

    return resp.status(200).json({ equipos });
  } catch (error) {
    console.log('Ocurrio un error inesperado', error);
    return resp.status(500).json({
      msg: 'Ocurrio un error inesperado, contacte al administrador'
    });
  }
};

export const obtenerEquipoPorId = async (req: Request, resp: Response) => {
  const { id = '' } = req.params;

  try {
    const equipo = await Equipo.findByPk(id, { raw: true });

    if (!equipo) {
      const error: IError = {
        msg: `El equipo con id: ${id} no se ha encontrado`,
        param: 'id',
        location: 'params'
      };

      return resp.status(400).json({ error });
    }

    return resp.status(200).json({ equipo });
  } catch (error) {
    console.log('Ocurrio un error inesperado: ', error);
    return resp.status(500).json({
      msg: 'Ocurrio un error inesperado, contacte al administrador'
    });
  }
};

export const crearEquipo = async (req: Request, resp: Response) => {
  const { id, ...body } = req.body;

  try {
    const equipo = Equipo.build(body);
    await equipo.save();

    return resp.status(201).json({ equipo });
  } catch (error) {
    if (error instanceof ValidationError) {
      const errorSequelize = formatErrorsSequelize(error);

      return resp.status(400).json(errorSequelize);
    }

    console.log('ocurrio un error inesperado: ', error);
    return resp.status(500).json({
      msg: 'Ocurrio un error inesperado, cantacte al administrador'
    });
  }
};

export const actualizarEquipo = async (req: Request, resp: Response) => {
  const { id = '' } = req.params;

  const { id: idEquipo, ...body } = req.body;

  try {
    const equipo = await Equipo.findByPk(id);

    await equipo?.update(body);

    return resp.status(200).json({ equipo });
  } catch (error) {
    if (error instanceof ValidationError) {
      const errorSequelize = formatErrorsSequelize(error);

      return resp.status(400).json(errorSequelize);
    }
    console.log('Ocurrio un error inesperado: ', error);

    return resp.status(500).json({
      msg: 'Ocurrio un error inesperado, contacte al administrador'
    });
  }
};

export const borrarEquipo = async (req: Request, resp: Response) => {
  const { id = '' } = req.params;

  try {
    const equipo = await Equipo.findByPk(id);

    await equipo?.destroy();

    resp.sendStatus(204);
  } catch (error) {
    console.log('Ocurrio un error inesperado: ', error);
    return resp.status(500).json({
      msg: 'Ocurrio un error inesperado, contacte al administrador'
    });
  }
};
