import {
  actualizarJugador,
  crearJugador,
  eliminarJugador,
  obtenerJugadorById,
  obtenerJugadores,
  obtenerJugadoresConRelaciones
} from '@controllers/jugadores.controller';
import { existeJugador } from '@helpers/db-validators';
import { validarCampos } from '@middlewares/validar-campos';
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router();

router.get('/', obtenerJugadores);

router.get('/all', obtenerJugadoresConRelaciones);

router.get(
  '/:id',
  [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeJugador),
    validarCampos
  ],
  obtenerJugadorById
);

router.post(
  '/',
  [
    check(
      'nombre',
      'El nombre debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check(
      'apellido',
      'El apellido debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check('fecha_nacimiento', 'La fecha de nacimiento es requerida').notEmpty(),
    check(
      'fecha_nacimiento',
      'El formato de la fecha es incorrecto, debe ser: YYYY-MM-DD'
    ).isDate({
      format: 'YYYY-MM-DD'
    }),
    validarCampos
  ],
  crearJugador
);

router.put(
  '/:id',
  [
    check('id').custom(existeJugador),
    check(
      'nombre',
      'El nombre debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check(
      'apellido',
      'El apellido debe contener al menos tres caracteres'
    ).isLength({ min: 3 }),
    check('fecha_nacimiento', 'La fecha de nacimiento es requerida').notEmpty(),
    check(
      'fecha_nacimiento',
      'El formato de la fecha es incorrecto, debe ser: YYYY-MM-DD'
    ).isDate({
      format: 'YYYY-MM-DD'
    }),
    validarCampos
  ],
  actualizarJugador
);

router.delete('/:id', check('id').custom(existeJugador), eliminarJugador);

export default router;
