import { generarGoles, obtenerGoles } from '@controllers/goles.controllers';
import { Router } from 'express';

const router = Router();

router.get('/', obtenerGoles);
router.get('/generar', generarGoles);

export default router;
