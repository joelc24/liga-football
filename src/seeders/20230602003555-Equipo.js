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

    await queryInterface.bulkInsert('equipos', [
      {
        nombre: 'junior',
        nombre_completo: 'club junior fc',
        id_ciudad: '144',
        fundacion: '1924-08-07'
      },
      {
        nombre: 'millonarios',
        nombre_completo: 'millonarios futbol club',
        id_ciudad: '167',
        fundacion: '1946-06-18'
      },
      {
        nombre: 'deportivo cali',
        nombre_completo: 'asociacion deportivo cali',
        id_ciudad: '1093',
        fundacion: '1912-11-23'
      },
      {
        nombre: 'america de cali',
        nombre_completo: 'sa deportiva america',
        id_ciudad: '1093',
        fundacion: '1927-02-13'
      },
      {
        nombre: 'at. nacional',
        nombre_completo: 'atletico nacional s.a',
        id_ciudad: '12',
        fundacion: '1947-03-07'
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

    await queryInterface.bulkDelete('equipos', null, {});
  }
};
