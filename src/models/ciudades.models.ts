import { type Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table
} from 'sequelize-typescript';

import { type ICiudad } from '@interfaces/ciudad.interface';
import Departamento from './departamentos.models';
import Equipo from './equipos.models';

interface ICiudadCreationAttributes extends Optional<ICiudad, 'id'> {}

@Table({ tableName: 'ciudades', timestamps: true })
class Ciudad extends Model<ICiudad, ICiudadCreationAttributes> {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    set(val: string) {
      this.setDataValue('nombre', val.toLocaleLowerCase());
    }
  })
  public nombre!: string;

  @ForeignKey(() => Departamento)
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'id_departamento',
    references: {
      key: 'id',
      model: 'departamentos'
    }
  })
  public idDepartamento!: string;

  @BelongsTo(() => Departamento)
  public departamento!: Departamento;

  @HasMany(() => Equipo)
  public equipos!: Equipo[];
}

export default Ciudad;

// const Ciudad = sequelize.define<Model<ICiudad>>(
//   'ciudades',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       set(val: string) {
//         this.setDataValue('nombre', val.toLowerCase());
//       }
//     },
//     idDepartamento: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//       field: 'id_departamento',
//       references: {
//         key: 'id',
//         model: 'departamentos'
//       }
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// Ciudad.belongsTo(Departamento, {
//   foreignKey: 'id_departamento',
//   onDelete: 'CASCADE'
// });

// Departamento.hasMany(Ciudad, {
//   foreignKey: 'id_departamento',
//   onDelete: 'CASCADE'
// });

// export default Ciudad;
