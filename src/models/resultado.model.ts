import { type Optional } from 'sequelize';
import { type IResultado } from '../interfaces/resultado.interface';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import Calendario from './calendario.models';

interface IResultadoCreationAttributes extends Optional<IResultado, 'id'> {}

@Table({ tableName: 'resultados', timestamps: true })
class Resultado extends Model<IResultado, IResultadoCreationAttributes> {
  @ForeignKey(() => Calendario)
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'id_partido',
    references: {
      key: 'id',
      model: 'calendarios'
    }
  })
  public idPartido!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'goles_local'
  })
  public golesLocal!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'goles_visitante'
  })
  public golesVisitante!: number;

  @BelongsTo(() => Calendario, 'idPartido')
  public partido!: Calendario;
}

export default Resultado;
