import { obtenerGoles } from '@controllers/goles.controllers';
import { Router } from 'express';

const router = Router();

router.get('/', obtenerGoles);

export default router;
