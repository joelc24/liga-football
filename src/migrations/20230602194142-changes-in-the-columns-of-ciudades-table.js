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
      autoIncrement: false
    });

    await queryInterface.removeConstraint('ciudades', 'ciudades_ibfk_1');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.changeColumn('ciudades', 'id', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true
    });

    await queryInterface.addConstraint('ciudades', {
      fields: ['id_departamento'],
      type: 'foreign key',
      name: 'ciudades_ibfk_1',
      references: {
        table: 'departamentos',
        field: 'id'
      }
    });
  }
};
