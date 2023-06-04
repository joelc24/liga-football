import {
  actualizarContacto,
  crearContacto,
  eliminarContacto,
  obtenerInformacionContactoById
} from '@controllers/contactos.controller';
import { Router } from 'express';
import { check } from 'express-validator';
import {
  existeEquipo,
  existeInformacionContacto
} from '../helpers/db-validators';
import { validarCampos } from '@middlewares/validar-campos';

const router = Router();

router.get(
  '/:id',
  check('id').custom(existeInformacionContacto),
  obtenerInformacionContactoById
);

router.post(
  '/',
  [
    check('id_equipo', 'El id del equipo es requerido').notEmpty(),
    check('id_equipo').custom(existeEquipo),
    check(
      'pagina_web',
      'El enlace de su pagina web oficial es requerido'
    ).notEmpty(),
    check(
      'direccion_oficina',
      'La direccion de la oficina es requerida'
    ).notEmpty(),
    check(
      'link_red_social',
      'el link de su red social es requerido'
    ).notEmpty(),
    validarCampos
  ],
  crearContacto
);

router.put(
  '/:id',
  [
    check('id').custom(existeInformacionContacto),
    check('id_equipo', 'El id del equipo es requerido').notEmpty(),
    check('id_equipo').custom(existeEquipo),
    check(
      'pagina_web',
      'El enlace de su pagina web oficial es requerido'
    ).notEmpty(),
    check(
      'direccion_oficina',
      'La direccion de la oficina es requerida'
    ).notEmpty(),
    check(
      'link_red_social',
      'el link de su red social es requerido'
    ).notEmpty(),
    validarCampos
  ],
  actualizarContacto
);

router.delete(
  '/:id',
  [check('id').custom(existeInformacionContacto), validarCampos],
  eliminarContacto
);

export default router;
