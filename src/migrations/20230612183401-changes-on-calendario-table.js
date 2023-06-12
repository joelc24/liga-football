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
    await queryInterface.renameColumn('calendarios', 'fecha', 'fecha_partido');
    await queryInterface.addColumn('calendarios', 'fecha', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('calendarios', 'fecha');
    await queryInterface.renameColumn('calendarios', 'fecha_partido', 'fecha');
  }
};
