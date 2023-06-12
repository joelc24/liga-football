import { Router } from 'express';
import { truncarTables } from '@controllers/truncar-table.controllers';

const router = Router();

router.get('/', truncarTables);

export default router;
