import { insercionMasiva } from '@controllers/insercion-masiva.controller';
import { Router } from 'express';

const router = Router();

router.get('/', insercionMasiva);

export default router;
