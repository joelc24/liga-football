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
    await queryInterface.removeConstraint('equipos', 'id_ciudades');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addConstraint('equipos', {
      fields: ['id_ciudades'],
      type: 'foreign key',
      name: 'id_ciudades',
      references: {
        table: 'ciudades',
        field: 'id'
      }
    });
  }
};
