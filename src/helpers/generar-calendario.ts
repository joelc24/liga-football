import { addDays, format } from 'date-fns';
import { randomInt } from './random-date-time';
import { type ICalendario } from '@interfaces/calendario.interface';
import { type Operator, pipe } from './pipe';

type RandomEquipos = Operator<Array<{ id: number }>, Array<{ id: number }>>;

type AsignarPartidos = Operator<
  Array<{ id: number }>,
  Array<{ idEquipoLocal: number; idEquipoVisitante: number }>
>;

type AsignarFechas = Operator<
  Array<{ idEquipoLocal: number; idEquipoVisitante: number }>,
  ICalendario[]
>;

const randomEquipos: RandomEquipos = (equipos: Array<{ id: number }>) =>
  equipos.sort(() => Math.random() - 0.5);

const asignarPartidos: AsignarPartidos = (
  equiposAleatorios: Array<{ id: number }>
) => {
  const partidos = [];

  for (let i = 0; i < equiposAleatorios.length - 1; i++) {
    for (let j = i + 1; j < equiposAleatorios.length; j++) {
      partidos.push({
        idEquipoLocal: equiposAleatorios[i].id,
        idEquipoVisitante: equiposAleatorios[j].id
      });
    }
  }

  return partidos.sort(() => Math.random() - 0.5);
};

const asignarFechas: AsignarFechas = (
  partidos: Array<{ idEquipoLocal: number; idEquipoVisitante: number }>
): ICalendario[] => {
  let date = new Date();
  let iteracionDia = 1;

  return partidos.map((partido) => {
    const maxhour = randomInt(9, 22);
    let maxMinute = randomInt(0, 60);
    maxMinute = maxMinute < 10 ? Number(`0${maxMinute}`) : maxMinute;

    if ([0, 3, 6, 8].includes(iteracionDia)) {
      date = addDays(date, 3);
    }

    iteracionDia === 9 ? (iteracionDia = 0) : (iteracionDia += 1);

    return {
      ...partido,
      fecha: format(date, 'MM/dd/yyyy'),
      hora: `${maxhour}:${maxMinute}:00`
    };
  });
};

export const calendarioGenerado = async (equipos: Array<{ id: number }>) =>
  await pipe(equipos, randomEquipos, asignarPartidos, asignarFechas);
