import { type ValidationError } from 'sequelize';
/**
 * Esta funcion sirve para tomar un error lanzado
 * por sequelize y mandarlo de la forma tradicional al usuario
 * */
export const formatErrorsSequelize = (errors: ValidationError) => {
    return errors.errors.map((errorItem) => ({
        type: errorItem.type,
        value: errorItem.value,
        msg: errorItem.message,
        path: errorItem.path,
        location: 'body'
    }));
};
