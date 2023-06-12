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
