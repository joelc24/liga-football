import { CalendarioData } from '@data/calendario.data';
import { contactoEquiposData } from '@data/contacto-equipos.data';
import { equiposData } from '@data/equipos.data';
import { dataGoles, dataResultado } from '@data/goles-resultados.data';
import { jugadoresData } from '@data/jugadores.data';
import { posicionesData } from '@data/posiciones.data';
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

    await Calendario.bulkCreate(CalendarioData);
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
