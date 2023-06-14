import { Router } from 'express';
import { check } from 'express-validator';

import { validarCamposCalendario } from '@middlewares/validar-calendario';
import { validarCampos } from '@middlewares/validar-campos';

import {
  generarData,
  insercionMasiva,
  insertarCalendario,
  obtenerCalendario,
  obtenerJugadoresPartido
} from '@controllers/calendario.controllers';

const router = Router();

router.get('/generar-calendario', generarData);

router.get('/', obtenerCalendario);

router.get(
  '/:id/jugadores',
  [check('id', 'El id del partido es requerido').notEmpty(), validarCampos],
  obtenerJugadoresPartido
);

router.post(
  '/insercion',
  [
    check('fecha', 'La fehca es requerida').notEmpty,
    check('hora', 'La hora es requerida').notEmpty(),
    check('idEquipoLocal', 'El id del equipo local es requerido').notEmpty(),
    check(
      'idEquipoVisitante',
      'El id del equipo visitante es requerido'
    ).notEmpty(),
    validarCampos
  ],
  insertarCalendario
);

router.post(
  '/insercion-masiva',
  [
    check('calendarios', 'Calendarios es requerido').notEmpty(),
    check(
      'calendarios',
      'Calendarios debe ser un array de calendarios'
    ).isArray(),
    validarCampos,
    validarCamposCalendario
  ],
  insercionMasiva
);

export default router;
