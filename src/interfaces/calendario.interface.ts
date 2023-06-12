export interface ICalendario {
  id?: number;
  fecha: Date | string;
  hora: string;
  idEquipoLocal: number;
  idEquipoVisitante: number;

  createdAt?: Date;
  updatedAt?: Date;
}
