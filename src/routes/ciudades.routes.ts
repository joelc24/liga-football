import { llenarCiudadesDB } from '@controllers/ciudades.controllers';
import { Router } from 'express';

const router = Router();

router.get('/', llenarCiudadesDB);

export default router;
