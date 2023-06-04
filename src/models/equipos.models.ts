import { sequelize } from '@config/dbConnection';
import { type IEquipo } from '@interfaces/equipo.interface';
import { DataTypes, type Model } from 'sequelize';
import Ciudad from './ciudades.models';

const Equipo = sequelize.define<Model<IEquipo>>(
  'equipos',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value: string) {
        this.setDataValue('nombre', value.toLowerCase());
      }
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value: string) {
        this.setDataValue('nombre_completo', value.toLocaleLowerCase());
      }
    },
    id_ciudad: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        key: 'id',
        model: 'ciudades'
      }
    },
    fundacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: 'El tipo de fundacion debe ser una fecha (Date)'
        }
      }
    }
  },
  {
    timestamps: true
  }
);

Equipo.belongsTo(Ciudad, {
  foreignKey: 'id_ciudad',
  as: 'ciudad'
});

Ciudad.hasMany(Equipo, {
  foreignKey: 'id_ciudad',
  as: 'equipos'
});

export default Equipo;
