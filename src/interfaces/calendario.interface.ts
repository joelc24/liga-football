export interface ICalendario {
  id?: number;
  fechaPartido: Date | string;
  hora: string;
  idEquipoLocal: number;
  idEquipoVisitante: number;
  fecha: number;

  createdAt?: Date;
  updatedAt?: Date;
}
