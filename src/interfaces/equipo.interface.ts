export interface IEquipo {
  id?: number;
  nombre: string;
  nombreCompleto: string;
  idCiudad: number;
  fundacion: string;

  createdAt?: Date;
  updatedAt?: Date;
}
