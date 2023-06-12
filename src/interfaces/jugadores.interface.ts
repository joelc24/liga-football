export interface IJugador {
  id?: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date | string;
  edad?: number;
  idPosicion: number;
  idEquipo: number;

  createdAt?: Date;
  updatedAt?: Date;
}
