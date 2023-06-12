import { Router } from 'express';
import { check } from 'express-validator';

import { validarCamposCalendario } from '@middlewares/validar-calendario';
import { validarCampos } from '@middlewares/validar-campos';

import {
  generarData,
  insercionMasiva,
  insertarCalendario,
  obtenerCalendario
} from '@controllers/calendario.controllers';

const router = Router();

router.get('/generar-calendario', generarData);

router.get('/', obtenerCalendario);

router.post(
  '/insercion',
  [
    check('fecha', 'La fehca es requerida').notEmpty,
    check('hora', 'La hora es requerida').notEmpty(),
    check('id_equipo_local', 'El id del equipo local es requerido').notEmpty(),
    check(
      'id_equipo_visitante',
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
