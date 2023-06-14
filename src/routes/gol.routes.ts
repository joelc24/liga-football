import {
  generarGoles,
  insertarGol,
  obtenerGoles
} from '@controllers/goles.controllers';
import { validarCampos } from '@middlewares/validar-campos';
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router();

router.get('/', obtenerGoles);
router.get('/generar', generarGoles);

router.post(
  '/',
  [
    check('idPartido', 'El idPartido es requerido').notEmpty(),
    check('idJugador', 'El id del jugador es requerido ').notEmpty(),
    check('minuto', 'El minuto es requerido').notEmpty(),
    validarCampos
  ],
  insertarGol
);

export default router;
