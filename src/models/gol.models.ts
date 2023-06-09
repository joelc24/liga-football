import { type Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';

import Calendario from './calendario.models';
import Jugador from './jugadores.models';
import { type IGol } from '@interfaces/gol.models';

interface IGolCreationAttributes extends Optional<IGol, 'id'> {}

@Table({ tableName: 'goles', timestamps: true })
class Gol extends Model<IGol, IGolCreationAttributes> {
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

  @ForeignKey(() => Jugador)
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
    field: 'id_jugador',
    references: {
      key: 'id',
      model: 'jugadores'
    }
  })
  public idJugador!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  public minuto!: number;

  @BelongsTo(() => Calendario)
  public partido!: Calendario;

  @BelongsTo(() => Jugador)
  public jugador!: Jugador;
}

export default Gol;
