import { type ICalendario } from '@interfaces/calendario.interface';
import { type NextFunction, type Request, type Response } from 'express';

export const validarCamposCalendario = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const calendarios: ICalendario[] = req.body.calendarios;
  let posicion = 1;
  for (const { fecha, hora, idEquipoLocal, idEquipoVisitante } of calendarios) {
    if (!fecha || !hora || !idEquipoLocal || !idEquipoVisitante) {
      return resp
        .status(400)
        .json({ msg: `El calendario numero ${posicion} le faltan argumentos` });
    }
    posicion += 1;
  }

  next();
};
