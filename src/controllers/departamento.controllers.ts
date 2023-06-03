import { type Request, type Response } from 'express';

import Departamento from '@models/departamentos.models';

import { type IDepartamento } from '@interfaces/departamento.interface';
import { type IDepartamentoResponse } from '@interfaces/departamento-response.interface';
import { EnpointsApiColombia } from '@enums/enpoints-api-columbia.enums';
import { apiColombia } from '@api/index';
import Ciudad from '@models/ciudades.models';

export const llenarDepartamentosDB = async (req: Request, resp: Response) => {
  try {
    await Departamento.destroy({
      where: {},
      truncate: true
    });

    const { data } = await apiColombia.get<IDepartamentoResponse[]>(
      `/${EnpointsApiColombia.Departamentos}`
    );

    let departamentos: IDepartamento[] = data.map((departamento) => ({
      id: departamento.id,
      nombre: departamento.name
    }));

    departamentos = departamentos.sort((a, b) =>
      a.nombre < b.nombre ? -1 : 1
    );

    await Departamento.bulkCreate(departamentos);
    return resp.status(201).json({ msg: 'departamentos creados con exito' });
  } catch (error) {
    console.log('ocurrio un error inesperado: ', error);
    return resp.status(500).json({
      msg: 'ocurrio un error inesperado, cantacte al administrador'
    });
  }
};

export const obtenertDepartamentos = async (req: Request, resp: Response) => {
  try {
    const departamentos = await Departamento.findAll({ include: Ciudad });
    return resp.status(200).json({ departamentos });
  } catch (error) {
    console.log('ocurrio un error inesperado: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};
