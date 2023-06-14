import { type Request, type Response } from 'express';
import { Sequelize, ValidationError } from 'sequelize';

import { type IError } from '@interfaces/error.interface';

import { formatErrorsSequelize } from '@helpers/formatear-errors-sequelize';
import Equipo from '@models/equipos.models';

export const getEquipos = async (req: Request, resp: Response) => {
  try {
    const equipos = await Equipo.findAll({
      attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion']
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
      attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion'],
      include: [
        {
          association: 'contacto',
          attributes: [
            'direccionOficina',
            'paginaWeb',
            [
              Sequelize.fn(
                'GROUP_CONCAT',
                Sequelize.literal('DISTINCT link_red_social')
              ),
              'redesSociales'
            ]
          ]
        },
        { association: 'ciudad', attributes: ['id', 'nombre'] },
        {
          association: 'jugadores',
          attributes: ['id', 'nombre', 'apellido', 'fechaNacimiento', 'edad'],
          include: [{ association: 'posicion', attributes: ['id', 'nombre'] }]
        }
      ],
      group: [
        'equipo.id',
        'equipo.nombre',
        'equipo.nombre_completo',
        'equipo.fundacion'
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
    const equipoToBD = Equipo.build(body);
    await equipoToBD.save();

    const { createdAt, updatedAt, ...equipo } = equipoToBD.toJSON();

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
