import { DataTypes, type Model } from 'sequelize';
import { sequelize } from '@config/dbConnection';
import { type ICiudad } from '@interfaces/ciudad.interface';
import Departamento from './departamentos.models';

const Ciudad = sequelize.define<Model<ICiudad>>(
  'ciudades',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val: string) {
        this.setDataValue('nombre', val.toLowerCase());
      }
    },
    id_departamento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        key: 'id',
        model: 'departamentos'
      }
    }
  },
  {
    timestamps: true
  }
);

Ciudad.belongsTo(Departamento, {
  foreignKey: 'id_departamento',
  onDelete: 'CASCADE'
});

Departamento.hasMany(Ciudad, {
  foreignKey: 'id_departamento',
  onDelete: 'CASCADE'
});

export default Ciudad;
