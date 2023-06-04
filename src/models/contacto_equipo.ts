import { sequelize } from '@config/dbConnection';
import { type IContacto_Equipo } from '@interfaces/contacto_equipo.interface';
import { DataTypes, type Model } from 'sequelize';
import Equipo from './equipos.models';

const ContactoEquipo = sequelize.define<Model<IContacto_Equipo>>(
  'contacto_equipos',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    pagina_web: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val: string) {
        this.setDataValue('pagina_web', val.toLowerCase());
      }
    },
    direccion_oficina: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val: string) {
        this.setDataValue('direccion_oficina', val.toLowerCase());
      }
    },
    link_red_social: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val: string) {
        this.setDataValue('link_red_social', val.toLowerCase());
      }
    },
    id_equipo: {
      type: DataTypes.INTEGER,
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

ContactoEquipo.belongsTo(Equipo, {
  foreignKey: 'id_equipo',
  as: 'equipo'
});

Equipo.hasMany(ContactoEquipo, {
  foreignKey: 'id_equipo',
  as: 'contacto',
  onDelete: 'CASCADE'
});

export default ContactoEquipo;
