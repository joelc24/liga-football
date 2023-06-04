import { Router } from 'express';
import {
  llenarDepartamentosDB,
  obtenertDepartamentos,
  obtenertDepartamentosConCiudades
} from '@controllers/departamento.controllers';
import { check } from 'express-validator';
import { existeDepartamento } from '@helpers/db-validators';
import { validarCampos } from '@middlewares/validar-campos';

const router = Router();

router.get('/dbseed', llenarDepartamentosDB);

router.get('/', obtenertDepartamentos);

router.get('/ciudades', obtenertDepartamentosConCiudades);

router.get(
  '/:id',
  [
    check('id', 'El id es requerido').notEmpty(),
    check('id').custom(existeDepartamento),
    validarCampos
  ],
  obtenertDepartamentos
);

export default router;
