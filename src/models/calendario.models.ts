import { type Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table
} from 'sequelize-typescript';
import Equipo from './equipos.models';
import { type ICalendario } from '@interfaces/calendario.interface';
import Resultado from './resultado.model';

interface ICalendarioCreationAttributes extends Optional<ICalendario, 'id'> {}

@Table({ tableName: 'calendarios', timestamps: true })
class Calendario extends Model<ICalendario, ICalendarioCreationAttributes> {
  @Column({
    allowNull: false,
    type: DataType.DATEONLY
  })
  public fecha!: Date | string;

  @Column({
    allowNull: false,
    type: DataType.TIME
  })
  public hora!: string;

  @ForeignKey(() => Equipo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'id_equipo_local',
    references: {
      key: 'id',
      model: 'equipos'
    }
  })
  public idEquipoLocal!: number;

  @ForeignKey(() => Equipo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'id_equipo_visitante',
    references: {
      key: 'id',
      model: 'equipos'
    }
  })
  public idEquipoVisitante!: number;

  @BelongsTo(() => Equipo, 'idEquipoLocal')
  public equipoLocal!: Equipo;

  @BelongsTo(() => Equipo, 'idEquipoVisitante')
  public equipoVisitante!: Equipo;

  @HasOne(() => Resultado, 'idPartido')
  public resultado!: Resultado;
}

export default Calendario;
