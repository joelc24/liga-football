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

// const Gol = sequelize.define<Model<IGol>>('goles', {
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   idPartido: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     allowNull: false,
//     references: {
//       key: 'id',
//       model: 'calendarios'
//     }
//   },
//   idJugador: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     allowNull: false,
//     references: {
//       key: 'id',
//       model: 'jugadores'
//     }
//   },
//   minuto: {
//     type: DataTypes.TIME,
//     allowNull: false
//   }
// });

// Gol.belongsTo(Calendario, {
//   foreignKey: 'id_partido',
//   as: 'partido'
// });

// Calendario.hasMany(Gol, {
//   foreignKey: 'id_partido',
//   as: 'goles'
// });

// Gol.belongsTo(Jugador, {
//   foreignKey: 'id_jugador',
//   as: 'jugador'
// });

// Jugador.hasMany(Gol, {
//   foreignKey: 'id_jugador',
//   as: 'goles'
// });

// export default Gol;
