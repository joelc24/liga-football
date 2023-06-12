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
// const Calendario = sequelize.define<Model<ICalendario>>(
//   'calendarios',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     fecha: {
//       allowNull: false,
//       type: DataTypes.DATEONLY
//     },
//     hora: {
//       allowNull: false,
//       type: DataTypes.TIME
//     },
//     idEquipoLocal: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: 'id_equipo_local',
//       references: {
//         key: 'id',
//         model: 'equipos'
//       }
//     },
//     idEquipoVisitante: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       field: 'id_equipo_visitante',
//       references: {
//         key: 'id',
//         model: 'equipos'
//       }
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// Calendario.belongsTo(Equipo, {
//   foreignKey: 'id_equipo_local',
//   as: 'equipo_local'
// });
// Calendario.belongsTo(Equipo, {
//   foreignKey: 'id_equipo_visitante',
//   as: 'equipo_visitante'
// });

// Equipo.hasMany(Calendario, {
//   foreignKey: 'id_equipo_local',
//   as: 'calendario_locales'
// });
// Equipo.hasMany(Calendario, {
//   foreignKey: 'id_equipo_visitante',
//   as: 'calendario_visitantes'
// });

// export default Calendario;
