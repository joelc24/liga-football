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

    await queryInterface.bulkInsert('jugadores', [
      {
        nombre: 'juan fernando',
        apellido: 'quintero panaigua',
        fecha_nacimiento: '1993-01-18',
        id_posicion: '5',
        id_equipo: '1'
      },
      {
        nombre: 'carlos arturo',
        apellido: 'bacca ahumada',
        fecha_nacimiento: '1986-09-08',
        id_posicion: '6',
        id_equipo: '1'
      },
      {
        nombre: 'mario sebastian',
        apellido: 'viera galain',
        fecha_nacimiento: '1983-03-07',
        id_posicion: '1',
        id_equipo: '1'
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

    await queryInterface.bulkDelete('jugadores');
  }
};
