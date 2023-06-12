import Calendario from '@models/calendario.models';

import { randomInt } from './random-date-time';
import { type IGol, type IResultado } from '@interfaces/index';
import { pipe } from './pipe';

// const obtenerCalendario = async () => {
//   try {
//     const calendario = await Calendario.findAll({
//       attributes: ['id', 'fehca', 'hora'],
//       raw: true,
//       include: [
//         {
//           association: 'equipoLocal',
//           attributes: ['id', 'nombre', 'nombre_completo', 'fundacion'],
//           include: [
//             {
//               association: 'jugadores',
//               attributes: ['id', 'nombre', 'apellido']
//             }
//           ]
//         },
//         {
//           association: 'equipoVisitante',
//           attributes: ['id', 'nombre', 'nombre_completo', 'fundacion'],
//           include: [
//             {
//               association: 'jugadores',
//               attributes: ['id', 'nombre', 'apellido']
//             }
//           ]
//         }
//       ]
//     });

//     calendario.map(
//       async (partido) =>
//         await partido.$get('equipoLocal', {
//           attributes: ['id', 'nombre', 'nombre_completo', 'fundacion']
//         })
//     );
//     return calendario;
//   } catch (error) {
//     console.log('ocurio un error: ', error);
//   }
// };

const obtenerCalendario = async () => {
  try {
    const calendario = await Calendario.findAll({
      attributes: ['id'],
      include: [
        {
          association: 'equipoLocal',
          attributes: ['id'],
          include: [{ association: 'jugadores', attributes: ['id'] }]
        },
        {
          association: 'equipoVisitante',
          attributes: ['id'],
          include: [{ association: 'jugadores', attributes: ['id'] }]
        }
      ]
    });

    // console.log({ calendario: calendario.map((partido) => partido.toJSON()) });

    return calendario;
  } catch (error) {
    console.log('ocurio un error: ', error);
    return [];
  }
};

const moldearDatos = async (partidos: Calendario[]) => {
  const data: Array<{
    idPartido: number;
    jugadores: Array<{
      local?: boolean;
      visitante?: boolean;
      id: number;
    }>;
  }> = [];

  // if (!data.length) {
  //   throw new Error('No se encontro calendario');
  // }

  for (const partido of partidos) {
    const idPartido = partido.id;
    const idJugadoresLocales = partido.equipoLocal.jugadores.map((jugador) => ({
      local: true,
      id: jugador.id
    }));

    const idJugadoresVisitante = partido.equipoVisitante.jugadores.map(
      (jugador) => ({ visitante: true, id: jugador.id })
    );

    const jugadores = [...idJugadoresLocales, ...idJugadoresVisitante];

    data.push({ idPartido, jugadores });
  }
  return data;
};

const generarData = (
  data: Array<{
    idPartido: number;
    jugadores: Array<{
      id: number;
      local?: boolean;
      visitante?: boolean;
    }>;
  }>
) => {
  const dataGoles: IGol[] = [];
  const dataResultado: IResultado[] = [];

  for (const { idPartido, jugadores } of data) {
    const cantidadGoles = randomInt(0, 6);

    let golesLocal = 0;
    let golesVisitante = 0;

    for (let i = 0; i < cantidadGoles; i++) {
      const indexJugador = randomInt(0, jugadores.length - 1);
      const jugador = jugadores.sort(() => Math.random() - 0.5)[indexJugador];

      const goles: IGol = {
        idPartido,
        idJugador: jugador.id,
        minuto: randomInt(0, 190)
      };

      dataGoles.push(goles);

      jugador?.local ? (golesLocal += 1) : (golesVisitante += 1);
    }

    const resultado: IResultado = {
      idPartido,
      golesLocal,
      golesVisitante
    };

    dataResultado.push(resultado);
  }

  return {
    dataGoles,
    dataResultado
  };
};

export const goleResultadosGenerados = async () =>
  await pipe(undefined, obtenerCalendario, moldearDatos, generarData);
