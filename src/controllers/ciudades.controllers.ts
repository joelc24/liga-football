import { type Request, type Response } from 'express';
import { apiColombia } from '@api/index';

import Ciudad from '@models/ciudades.models';

import { type ICiudadResponse } from '@interfaces/ciudad-response.interface';
import { type ICiudad } from '@interfaces/ciudad.interface';
import { EnpointsApiColombia } from '@enums/enpoints-api-columbia.enums';

export const llenarCiudadesDB = async (req: Request, resp: Response) => {
  try {
    const { data } = await apiColombia.get<ICiudadResponse[]>(
      `/${EnpointsApiColombia.Ciudades}`
    );

    let ciudades: ICiudad[] = data.map((ciudad) => ({
      id: ciudad.id,
      nombre: ciudad.name,
      id_departamento: ciudad.departmentId
    }));

    ciudades = ciudades.sort((a, b) => (a?.id && b?.id ? a.id - b.id : 0));

    await Ciudad.destroy({
      where: {},
      truncate: true
    });

    await Ciudad.bulkCreate(ciudades);

    return resp.status(201).json({ msg: 'Registros creados con exito' });
  } catch (error) {
    console.log('Ocurrio un error inesperado: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};
