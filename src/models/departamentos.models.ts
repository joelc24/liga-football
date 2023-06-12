import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { type Optional } from 'sequelize';

import Ciudad from './ciudades.models';
import { type IDepartamento } from '@interfaces/departamento.interface';

interface IDepartamentoCreationAttributes
  extends Optional<IDepartamento, 'id'> {}

@Table({ tableName: 'departamentos', timestamps: true })
class Departamento extends Model<
  IDepartamento,
  IDepartamentoCreationAttributes
> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    set(val: string) {
      this.setDataValue('nombre', val.toLocaleLowerCase());
    }
  })
  public nombre!: string;

  @HasMany(() => Ciudad)
  public ciudades!: Ciudad[];
}

export default Departamento;

// const Departamento = sequelize.define<Model<IDepartamento>>(
//   'departamentos',
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       set(val: string) {
//         this.setDataValue('nombre', val.toLowerCase());
//       }
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// export default Departamento;
