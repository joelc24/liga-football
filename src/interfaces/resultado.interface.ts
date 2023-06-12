export interface IResultado {
  id?: number;
  idPartido: number;
  golesLocal: number;
  golesVisitante: number;

  createdAt?: Date;
  updatedAt?: Date;
}
