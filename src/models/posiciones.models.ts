import { type IPosicion } from '@interfaces/posiciones.interface';
import { type Optional } from 'sequelize';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import Jugador from '@models/jugadores.models';

interface IPosicionCreationAttributes extends Optional<IPosicion, 'id'> {}

@Table({ tableName: 'posiciones', timestamps: true })
class Posicion extends Model<IPosicion, IPosicionCreationAttributes> {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    set(val: string) {
      this.setDataValue('nombre', val.toLowerCase());
    }
  })
  public nombre!: string;

  @HasMany(() => Jugador)
  public jugadores!: Jugador[];
}

export default Posicion;
