import { DataTypes, type Model } from 'sequelize';
import { sequelize } from '@config/dbConnection';
import { type IPosicion } from '@interfaces/posiciones.interface';
import Jugador from './jugadores.models';

const Posicion = sequelize.define<Model<IPosicion>>(
  'posiciones',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val: string) {
        this.setDataValue('nombre', val.toLowerCase());
      }
    }
  },
  {
    timestamps: true
  }
);

Jugador.belongsTo(Posicion, {
  foreignKey: 'id_posicion',
  as: 'posicion'
});

Posicion.hasMany(Jugador, {
  foreignKey: 'id_posicion',
  as: 'jugadores'
});

export default Posicion;
