import Equipo from '@models/equipos.models';

/**
 * Esta funcion es un middleware
 * sirve para validar si existe un equipo
 * el cual busca por el id
 *
 *  */

export const existeEquipo = async (id: string): Promise<boolean> => {
    const equipo = await Equipo.findByPk(id);

    if (!equipo) {
        throw new Error(`No existe un equipo con el id: ${id}`);
    }

    return true;
};
