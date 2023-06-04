import ContactoEquipo from '@models/contacto_equipo';
import Equipo from '@models/equipos.models';
import { type Request, type Response } from 'express';
import { Sequelize } from 'sequelize';

export const obtenerInformacionContactoById = async (
  req: Request,
  resp: Response
) => {
  const { id } = req.params;
  try {
    const contactoEquipo = await Equipo.findByPk(id, {
      attributes: ['nombre'],
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
        }
      ],
      group: ['equipos.nombre']
    });
    return resp.status(200).json({ contactoEquipo });
  } catch (error) {
    console.log('ocurrio un error inesperado: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const crearContacto = async (req: Request, resp: Response) => {
  const { id, ...body } = req.body;

  try {
    const informacionContacto = ContactoEquipo.build(body);
    await informacionContacto.save();

    return resp.status(201).json({ informacionContacto });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const actualizarContacto = async (req: Request, resp: Response) => {
  const { id: idContacto, ...body } = req.body;

  const { id } = req.params;

  try {
    const informacionContacto = await ContactoEquipo.findByPk(id);
    await informacionContacto?.update(body);

    return resp.status(200).json({ informacionContacto });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};

export const eliminarContacto = async (req: Request, resp: Response) => {
  const { id } = req.params;

  try {
    const informacionContacto = await ContactoEquipo.findByPk(id);
    await informacionContacto?.destroy();

    return resp.sendStatus(204);
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al adminitrador' });
  }
};
