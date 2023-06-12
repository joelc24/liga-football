import { sequelize } from '@config/dbConnection';
import Calendario from '@models/calendario.models';
import ContactoEquipo from '@models/contacto_equipo.models';
import Equipo from '@models/equipos.models';
import Gol from '@models/gol.models';
import Jugador from '@models/jugadores.models';
import Posicion from '@models/posiciones.models';
import Resultado from '@models/resultado.model';
import { type Request, type Response } from 'express';

export const truncarTables = async (req: Request, resp: Response) => {
  try {
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await Jugador.destroy({ where: {}, truncate: true });
    await Posicion.destroy({ where: {}, truncate: true });
    await ContactoEquipo.destroy({ where: {}, truncate: true });
    await Equipo.destroy({ where: {}, truncate: true });
    await Calendario.destroy({ where: {}, truncate: true });
    await Gol.destroy({ where: {}, truncate: true });
    await Resultado.destroy({ where: {}, truncate: true });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    return resp.status(200).json({ msg: 'tablas truncadas exitosamente!!' });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacta al administrador' });
  }
};
