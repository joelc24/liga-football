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
    await queryInterface.bulkInsert('contacto_equipos', [
      {
        pagina_web: 'http://juniorfc.co',
        direccion_oficina: 'Carrera 57 Nº 72 - 56 Barranquilla',
        link_red_social: 'https://www.facebook.com/juniorclubsa',
        id_equipo: 1
      },
      {
        pagina_web: 'http://juniorfc.co',
        direccion_oficina: 'Carrera 57 Nº 72 - 56 Barranquilla',
        link_red_social: 'https://twitter.com/juniorclubsa',
        id_equipo: 1
      },
      {
        pagina_web: 'http://juniorfc.co',
        direccion_oficina: 'Carrera 57 Nº 72 - 56 Barranquilla',
        link_red_social: 'https://www.instagram.com/juniorclubsa',
        id_equipo: 1
      },
      {
        pagina_web: 'http://juniorfc.co',
        direccion_oficina: 'Carrera 57 Nº 72 - 56 Barranquilla',
        link_red_social: 'https://www.youtube.com/user/clubdeportivojunior',
        id_equipo: 1
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
    await queryInterface.bulkDelete('contacto_equipos', null, {});
  }
};
