import { type NextFunction, type Request, type Response } from 'express';
import { validationResult } from 'express-validator';
/**
 * Esta funcion es el middleware que se encarga de validar
 *  si se encontro algun error y si hay los devuelve al usuario
 * debe de ir al final despues de todos los demas middlewares
 * */
export const validarCampos = (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return resp.status(400).json(errors);
    }
    next();
};
