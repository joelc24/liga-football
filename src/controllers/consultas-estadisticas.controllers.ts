import { type Response, type Request } from 'express';
import Calendario from '@models/calendario.models';
import Equipo from '@models/equipos.models';
import Gol from '@models/gol.models';
import Jugador from '@models/jugadores.models';
import Resultado from '@models/resultado.model';
import { Sequelize } from 'sequelize-typescript';
import { sequelize } from '@config/dbConnection';
import { QueryTypes } from 'sequelize';

export const obtenerGoleadores = async (req: Request, resp: Response) => {
  try {
    const goleadores = await Jugador.findAll({
      attributes: [
        'id',
        [
          Sequelize.literal(
            `(select concat_ws(' ', j.nombre, j.apellido) from jugadores j where j.id = Jugador.id)`
          ),
          'jugador'
        ],
        [
          Sequelize.literal(
            `(select e.nombre from equipos e where e.id = (select j.id_equipo from jugadores j where j.id = Jugador.id))`
          ),
          'equipo'
        ],
        [
          Sequelize.literal(
            `(SELECT sum(1) from goles where goles.id_jugador = Jugador.id)`
          ),
          'goles'
        ]
      ],
      group: ['id'],
      order: [[Sequelize.literal('goles'), 'DESC']]
    });

    return resp.status(200).json({ goleadores });
  } catch (error) {
    console.log('ocurrio un error: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};

export const obtenerCalendarioPorFecha = async (
  req: Request,
  resp: Response
) => {
  const { fecha = '' } = req.body;

  try {
    const calendario = await Calendario.findAll({
      attributes: ['id', 'fecha', 'hora'],
      include: [
        {
          association: 'equipoLocal',
          attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion']
        },
        {
          association: 'equipoVisitante',
          attributes: ['id', 'nombre', 'nombreCompleto', 'fundacion']
        }
      ],
      where: {
        fecha
      }
    });

    return resp.status(500).json({ calendario });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error, contacte al administrador' });
  }
};

export const obtenerTablaPosiciones = async (req: Request, resp: Response) => {
  try {
    const tabla = await sequelize.query(
      `select t.*,
    (t.pg * 3) + t.pe as pt 
from (
select e.id, e.nombre, e.nombre_completo, e.fundacion, e.id_ciudad,
      count(c.id) as pj,
      sum(case when r.goles_local > r.goles_visitante and c.id_equipo_local = e.id then 1
               when r.goles_visitante > r.goles_local and c.id_equipo_visitante = e.id then 1
               else 0 end) as pg, 
      sum(case when r.goles_local < r.goles_visitante and c.id_equipo_local = e.id then 1
               when r.goles_visitante < r.goles_local and c.id_equipo_visitante = e.id then 1
               else 0 end) as pp,
      sum(case when r.goles_local = r.goles_visitante then 1 else 0 end) as pe, -- aquí calculas la columna pe
      sum(case when c.id_equipo_local = e.id then r.goles_local
               when c.id_equipo_visitante = e.id then r.goles_visitante
               else 0 end) as gf,
      sum(case when c.id_equipo_local = e.id then r.goles_visitante
               when c.id_equipo_visitante = e.id then r.goles_local
               else 0 end) as gc
from equipos e
join calendarios c on c.id_equipo_local = e.id or c.id_equipo_visitante = e.id
join resultados r on r.id_partido = c.id
group by e.id
) t; `,
      { model: Equipo, mapToModel: true, type: QueryTypes.SELECT }
    );

    return resp.status(200).json({ tabla });
  } catch (error) {
    console.log('ocurrio un error: ', error);
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};

export const obtenerVallaMenosVencida = async (
  req: Request,
  resp: Response
) => {
  try {
    const vallaMenosVencida = await sequelize.query(
      `SELECT 
    t.id,
    t.nombre,
    t.nombre_completo,
    t.fundacion,
    t.id_ciudad,
    MIN(t.goles_en_contra) AS golesEnContra
FROM
    (SELECT 
        e.id,
            e.nombre,
            e.nombre_completo,
            e.fundacion,
            e.id_ciudad,
            SUM(CASE
                WHEN c.id_equipo_local = e.id THEN r.goles_visitante
                ELSE r.goles_local
            END) AS goles_en_contra
    FROM
        equipos e
    JOIN calendarios c ON c.id_equipo_local = e.id
        OR c.id_equipo_visitante = e.id
    JOIN resultados r ON r.id_partido = c.id
    GROUP BY e.id) AS t`,
      { model: Equipo, mapToModel: true, type: QueryTypes.SELECT }
    );

    return resp.status(200).json({ vallaMenosVencida });
  } catch (error) {
    return resp
      .status(500)
      .json({ msg: 'Ocurrio un error inesperado, contacte al administrador' });
  }
};
