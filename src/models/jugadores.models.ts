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
import { differenceInYears } from 'date-fns';

import Equipo from './equipos.models';
import Gol from './gol.models';
import Posicion from './posiciones.models';
import { type IJugador } from '@interfaces/jugadores.interface';

interface IJugadorCreationAttributes extends Optional<IJugador, 'id'> {}

@Table({ tableName: 'jugadores', timestamps: true })
class Jugador extends Model<IJugador, IJugadorCreationAttributes> {
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
    set(val: string) {
      this.setDataValue('apellido', val.toLowerCase());
    }
  })
  public apellido!: string;

  @Column({
    allowNull: false,
    type: DataType.DATEONLY,
    field: 'fecha_nacimiento'
  })
  public fechaNacimiento!: Date | string;

  @Column({
    type: DataType.VIRTUAL,
    get() {
      const fechaNacimiento: string | Date =
        this.getDataValue('fechaNacimiento');
      const edadActual = differenceInYears(
        new Date(),
        new Date(fechaNacimiento)
      );
      return edadActual;
    },
    set(val) {
      throw new Error(
        'La edad es solo una propiedad virtual, no se le puede asignar un valor'
      );
    }
  })
  public edad!: number;

  @ForeignKey(() => Posicion)
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'id_posicion',
    references: {
      key: 'id',
      model: 'posiciones'
    }
  })
  public idPosicion!: number;

  @ForeignKey(() => Equipo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'id_equipo',
    references: {
      key: 'id',
      model: 'equipos'
    }
  })
  public idEquipo!: number;

  @BelongsTo(() => Posicion)
  public posicion!: Posicion;

  @BelongsTo(() => Equipo)
  public equipo!: Equipo;

  @HasMany(() => Gol)
  public goles!: Gol[];
}

export default Jugador;
