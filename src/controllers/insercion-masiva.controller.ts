import { contactoEquiposData } from '@data/contacto-equipos.data';
import { equiposData } from '@data/equipos.data';
import { jugadoresData } from '@data/jugadores.data';
import { posicionesData } from '@data/posiciones.data';
import { calendarioGenerado } from '@helpers/generar-calendario';
import { goleResultadosGenerados } from '@helpers/generar-goles';
import Calendario from '@models/calendario.models';
import ContactoEquipo from '@models/contacto_equipo.models';
import Equipo from '@models/equipos.models';
import Gol from '@models/gol.models';
import Jugador from '@models/jugadores.models';
import Posicion from '@models/posiciones.models';
import Resultado from '@models/resultado.model';
import { type Request, type Response } from 'express';

export const insercionMasiva = async (req: Request, resp: Response) => {
  try {
    await Posicion.bulkCreate(posicionesData);
    await Equipo.bulkCreate(equiposData);
    await ContactoEquipo.bulkCreate(contactoEquiposData);
    await Jugador.bulkCreate(jugadoresData);
    const equipos = (await Equipo.findAll({ attributes: ['id'] })).map(
      (equipo) => ({ id: equipo.toJSON().id })
    );

    const calendarios = await calendarioGenerado(
      equipos as Array<{ id: number }>
    );
    await Calendario.bulkCreate(calendarios);

    const { dataGoles, dataResultado } = await goleResultadosGenerados();
    await Gol.bulkCreate(dataGoles);
    await Resultado.bulkCreate(dataResultado);
    return resp
      .status(200)
      .json({ msg: 'Insercion masiva realizada con exito' });
  } catch (error) {
    console.log('Ocurrio un error: ', error);
    return resp.status(500).json({
      msg: 'Ocurrio un error inesperado, contacte al administrador',
      error
    });
  }
};
