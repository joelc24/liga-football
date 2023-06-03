'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('ciudades', 'id', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true
    });

    await queryInterface.changeColumn('departamentos', 'id', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true
    });

    await queryInterface.renameColumn('equipos', 'id_ciudades', 'id_ciudad');

    await queryInterface.addConstraint('ciudades', {
      fields: ['id_departamento'],
      type: 'foreign key',
      name: 'ciudades_ibfk_1',
      onDelete: 'CASCADE',
      references: {
        table: 'departamentos',
        field: 'id'
      }
    });

    await queryInterface.addConstraint('equipos', {
      fields: ['id_ciudad'],
      type: 'foreign key',
      name: 'equipos_ibfk_1',
      references: {
        table: 'ciudades',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('equipos', 'equipos_ibfk_1');

    await queryInterface.removeConstraint('ciudades', 'ciudades_ibfk_1');

    await queryInterface.renameColumn('equipos', 'id_ciudad', 'id_ciudades');

    await queryInterface.changeColumn('departamentos', 'id', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: false
    });

    await queryInterface.changeColumn('ciudades', 'id', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: false
    });
  }
};
