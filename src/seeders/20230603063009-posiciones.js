'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('posiciones', [
      {
        nombre: 'portero'
      },
      {
        nombre: 'defensa/lateral'
      },
      {
        nombre: 'defensa/centro'
      },
      {
        nombre: 'mediocampista/centro'
      },
      {
        nombre: 'mediocampista/lateral'
      },
      {
        nombre: 'delantero'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('posiciones', null, {});
  }
};
