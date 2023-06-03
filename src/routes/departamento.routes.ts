import { Router } from 'express';
import {
  llenarDepartamentosDB,
  obtenertDepartamentos
} from '@controllers/departamento.controllers';

const router = Router();

router.get('/dbseed', llenarDepartamentosDB);

router.get('/', obtenertDepartamentos);

export default router;
