import { DataTypes, type Model } from 'sequelize';
import { sequelize } from '@config/dbConnection';
import { type IDepartamento } from '@interfaces/departamento.interface';

const Departamento = sequelize.define<Model<IDepartamento>>(
  'departamentos',
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

export default Departamento;
