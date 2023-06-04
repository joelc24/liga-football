import {
  llenarCiudadesDB,
  obtenerCiudadById,
  obtenerCiudades
} from '@controllers/ciudades.controllers';
import { existeCiudad } from '@helpers/db-validators';
import { validarCampos } from '@middlewares/validar-campos';
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router();

router.get('/dbseed', llenarCiudadesDB);

router.get('/', obtenerCiudades);

router.get(
  '/:id',
  [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeCiudad),
    validarCampos
  ],
  obtenerCiudadById
);

export default router;
