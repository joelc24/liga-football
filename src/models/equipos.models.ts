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
