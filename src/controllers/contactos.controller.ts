import ContactoEquipo from '@models/contacto_equipo.models';
import Equipo from '@models/equipos.models';
import { type Request, type Response } from 'express';
import { Op, Sequelize } from 'sequelize';

export const obtenerInformacionContactoById = async (
  req: Request,
  resp: Response
) => {
  const { id } = req.params;
  try {
    const contactoEquipo = await ContactoEquipo.findOne({
      attributes: [
        'id',
        'idEquipo',
        'direccionOficina',
        [
          Sequelize.fn(
            'GROUP_CONCAT',
            Sequelize.literal('DISTINCT pagina_web')
          ),
          'paginasWeb'
        ],
        [
          Sequelize.fn(
            'GROUP_CONCAT',
            Sequelize.literal('DISTINCT link_red_social')
          ),
          'linkRedesSociales'
        ]
      ],
      where: {
        idEquipo: id
      }
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
