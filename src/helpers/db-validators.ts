import Ciudad from '@models/ciudades.models';
import ContactoEquipo from '@models/contacto_equipo';
import Departamento from '@models/departamentos.models';
import Equipo from '@models/equipos.models';
import Jugador from '@models/jugadores.models';

/**
 * Esta funcion es un middleware
 * sirve para validar si existe un equipo
 * el cual busca por el id
 *
 *  */

export const existeEquipo = async (id = ''): Promise<boolean> => {
  const equipo = await Equipo.findByPk(id);

  if (!equipo) {
    throw new Error(`No existe un equipo con el id: ${id}`);
  }

  return true;
};

export const existeInformacionContacto = async (id = ''): Promise<boolean> => {
  const equipo = await ContactoEquipo.findByPk(id);

  if (!equipo) {
    throw new Error(`No existe inforacion con el id: ${id}`);
  }

  return true;
};

export const existeJugador = async (id = ''): Promise<boolean> => {
  const jugador = await Jugador.findByPk(id);

  if (!jugador) {
    throw new Error(`No existe un jugador con el id: ${id}`);
  }

  return true;
};

export const existeCiudad = async (id = ''): Promise<boolean> => {
  const ciudad = await Ciudad.findByPk(id);

  if (!ciudad) {
    throw new Error(`No existe una ciudad con el id: ${id}`);
  }

  return true;
};

export const existeDepartamento = async (id = ''): Promise<boolean> => {
  const departamento = await Departamento.findByPk(id);

  if (!departamento) {
    throw new Error(`No existe un departamento con el id: ${id}`);
  }

  return true;
};
