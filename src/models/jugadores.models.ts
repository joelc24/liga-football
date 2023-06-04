import { sequelize } from '@config/dbConnection';
import { type IJugador } from '@interfaces/jugadores.interface';
import moment from 'moment';
import { DataTypes, type Model } from 'sequelize';
import Equipo from './equipos.models';

const Jugador = sequelize.define<Model<IJugador>>(
  'jugadores',
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
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val: string) {
        this.setDataValue('apellido', val.toLowerCase());
      }
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    edad: {
      type: DataTypes.VIRTUAL,
      get() {
        const fechaNacimiento = this.getDataValue('fecha_nacimiento');
        const edadActual = moment().diff(fechaNacimiento, 'years');
        return edadActual;
      },
      set(val) {
        throw new Error(
          'La edad es solo un valor virtual, no se le puede asignar valor'
        );
      }
    },
    id_posicion: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        key: 'id',
        model: 'posiciones'
      }
    },
    id_equipo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        key: 'id',
        model: 'equipos'
      }
    }
  },
  {
    timestamps: true
  }
);

Jugador.belongsTo(Equipo, {
  foreignKey: 'id_equipo',
  as: 'equipo'
});

Equipo.hasMany(Jugador, {
  foreignKey: 'id_equipo',
  as: 'jugadores'
});

export default Jugador;
