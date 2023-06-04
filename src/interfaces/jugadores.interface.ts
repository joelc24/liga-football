export interface IJugador {
  id?: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento: Date;
  edad?: number;
  id_posicion: number;
  id_equipo: number;

  createdAt?: Date;
  updatedAt?: Date;
}
