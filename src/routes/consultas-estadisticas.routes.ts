import {
  obtenerCalendarioPorFecha,
  obtenerGoleadores,
  obtenerTablaPosiciones,
  obtenerVallaMenosVencida
} from '@controllers/consultas-estadisticas.controllers';
import { validarCampos } from '@middlewares/validar-campos';
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router();

router.get('/', obtenerGoleadores);

router.get('/tabla', obtenerTablaPosiciones);

router.get('/valla-menos-vencida', obtenerVallaMenosVencida);

router.post(
  '/fecha',
  [check('fecha', 'La fecha es requerida').notEmpty(), validarCampos],
  obtenerCalendarioPorFecha
);
export default router;
