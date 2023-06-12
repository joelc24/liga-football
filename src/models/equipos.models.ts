import { type Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
  Validate
} from 'sequelize-typescript';

import Ciudad from './ciudades.models';
import ContactoEquipo from './contacto_equipo.models';
import Jugador from './jugadores.models';
import Calendario from './calendario.models';
import { type IEquipo } from '@interfaces/equipo.interface';

interface IEquipoCreationAttributes extends Optional<IEquipo, 'id'> {}

@Table({ tableName: 'equipos', timestamps: true })
class Equipo extends Model<IEquipo, IEquipoCreationAttributes> {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    set(val: string) {
      this.setDataValue('nombre', val.toLowerCase());
    }
  })
  public nombre!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    field: 'nombre_completo',
    set(val: string) {
      this.setDataValue('nombreCompleto', val.toLowerCase());
    }
  })
  public nombreCompleto!: string;

  @ForeignKey(() => Ciudad)
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'id_ciudad',
    references: {
      key: 'id',
      model: 'ciudades'
    }
  })
  idCiudad!: number;

  @Validate({
    isDate: {
      args: true,
      msg: 'El tipo de fundacion debe ser una fecha (Date)'
    }
  })
  @Column({
    allowNull: false,
    type: DataType.DATEONLY
  })
  public fundacion!: Date | string;

  @BelongsTo(() => Ciudad)
  public ciudad!: Ciudad;

  @HasMany(() => ContactoEquipo)
  public contacto!: ContactoEquipo[];

  @HasMany(() => Jugador, 'idEquipo')
  public jugadores!: Jugador[];

  @HasMany(() => Calendario)
  public calendarioLocal!: Calendario[];

  @HasMany(() => Calendario)
  public calendarioVisitante!: Calendario[];
}

export default Equipo;

// const Equipo = sequelize.define<Model<IEquipo>>(
//   'equipos',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       set(value: string) {
//         this.setDataValue('nombre', value.toLowerCase());
//       }
//     },
//     nombreCompleto: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       field: 'nombre_completo',
//       set(value: string) {
//         this.setDataValue('nombreCompleto', value.toLocaleLowerCase());
//       }
//     },
//     idCiudad: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//       field: 'id_ciudad',
//       references: {
//         key: 'id',
//         model: 'ciudades'
//       }
//     },
//     fundacion: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//       validate: {
//         isDate: {
//           args: true,
//           msg: 'El tipo de fundacion debe ser una fecha (Date)'
//         }
//       }
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// Equipo.belongsTo(Ciudad, {
//   foreignKey: 'id_ciudad',
//   as: 'ciudad'
// });

// Ciudad.hasMany(Equipo, {
//   foreignKey: 'id_ciudad',
//   as: 'equipos'
// });

// export default Equipo;
