import { Router } from 'express';
import { check } from 'express-validator';

import {
  actualizarEquipo,
  borrarEquipo,
  crearEquipo,
  getEquipos,
  obtenerEquipoPorId,
  obtenerEquipos
} from '@controllers/equipos.controllers';

import { validarCampos } from '@middlewares/validar-campos';
import { existeEquipo } from '@helpers/db-validators';

const router = Router();

router.get('/', getEquipos);

router.get('/all', obtenerEquipos);

router.get(
  '/:id',
  [
    check('id', 'El id del equipo es requerido').notEmpty(),
    check('id').custom(existeEquipo),
    validarCampos
  ],
  obtenerEquipoPorId
);

router.post(
  '/',
  [
    check(
      'nombre',
      'El nombre debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check(
      'nombre_completo',
      'El nombre completo debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check('ciudad', 'La ciudad es requerida').notEmpty(),
    check(
      'fundacion',
      'El año de fundacion del equipo es requerido'
    ).notEmpty(),
    validarCampos
  ],
  crearEquipo
);

router.put(
  '/:id',
  [
    check('id', 'El id del equipo es requerido').notEmpty(),
    check('id').custom(existeEquipo),
    check(
      'nombre',
      'El nombre debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check(
      'nombre_completo',
      'El nombre debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check('ciudad', 'La ciudad es requerida').notEmpty(),
    check(
      'fundacion',
      'El año de fundacion del equipo es requerido'
    ).notEmpty(),
    validarCampos
  ],
  actualizarEquipo
);

router.delete(
  '/:id',
  [
    check('id', 'El id del equipo es requerido').notEmpty(),
    check('id').custom(existeEquipo),
    validarCampos
  ],
  borrarEquipo
);

export default router;
