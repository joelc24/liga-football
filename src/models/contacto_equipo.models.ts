import { type Optional } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';

import Equipo from './equipos.models';
import { type IContactoEquipo } from '@interfaces/contacto_equipo.interface';

interface IcontactoEquipoCreationAttributes
  extends Optional<IContactoEquipo, 'id'> {}

@Table({ tableName: 'contacto_equipos', timestamps: true })
class ContactoEquipo extends Model<
  IContactoEquipo,
  IcontactoEquipoCreationAttributes
> {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    field: 'pagina_web',
    set(val: string) {
      this.setDataValue('paginaWeb', val.toLowerCase());
    }
  })
  public paginaWeb!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    field: 'direccion_oficina',
    set(val: string) {
      this.setDataValue('direccionOficina', val.toLowerCase());
    }
  })
  public direccionOficina!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    field: 'link_red_social',
    set(val: string) {
      this.setDataValue('linkRedSocial', val.toLowerCase());
    }
  })
  public linkRedSocial!: string;

  @ForeignKey(() => Equipo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'id_equipo',
    references: {
      key: 'id',
      model: 'equipos'
    }
  })
  public idEquipo!: number;

  @BelongsTo(() => Equipo)
  public equipo!: Equipo;
}

export default ContactoEquipo;
