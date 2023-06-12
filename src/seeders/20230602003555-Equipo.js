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
        nombre: 'águilas',
        nombre_completo: 'águilas doradas rionegro',
        id_ciudad: '2',
        fundacion: '2008-01-01'
      },
      {
        nombre: 'alianza petrolera',
        nombre_completo: 'alianza petrolera fútbol club s. a.',
        id_ciudad: '921',
        fundacion: '1991-01-01'
      },
      {
        nombre: 'américa',
        nombre_completo: 'américa de cali s. a.',
        id_ciudad: '1093',
        fundacion: '1927-12-13'
      },
      {
        nombre: 'atlético bucaramanga',
        nombre_completo: 'atlético bucaramanga s. a.',
        id_ciudad: '915',
        fundacion: '1949-02-11'
      },
      {
        nombre: 'atlético huila',
        nombre_completo: 'club deportivo atlético huila s. a.',
        id_ciudad: '657',
        fundacion: '1990-11-29'
      },
      {
        nombre: 'atlético nacional',
        nombre_completo: 'corporación deportiva club atlético nacional s. a.',
        id_ciudad: '12',
        fundacion: '1947-03-30'
      },
      {
        nombre: 'boyacá chicó',
        nombre_completo: 'boyacá chicó fútbol club s. a.',
        id_ciudad: '217',
        fundacion: '2002-03-26'
      },
      {
        nombre: 'deportes quindío',
        nombre_completo: 'corporación deportes quindío s. a.',
        id_ciudad: '26',
        fundacion: '1951-01-08'
      },
      {
        nombre: 'deportes tolima',
        nombre_completo: 'club deportes tolima s. a.',
        id_ciudad: '1096',
        fundacion: '1954-12-18'
      },
      {
        nombre: 'deportivo cali',
        nombre_completo: 'asociación deportivo cali s. a.',
        id_ciudad: '1100',
        fundacion: '1912-11-23'
      },
      {
        nombre: 'deportivo pasto',
        nombre_completo: 'asociación deportivo pasto s. a.',
        id_ciudad: '769',
        fundacion: '1949-10-12'
      },
      {
        nombre: 'deportivo pereira',
        nombre_completo:
          'corporación social deportiva y cultural de pereira s. a. - corpereira - deportivo pereira s.a.s.',
        id_ciudad: '897',
        fundacion: '1944-02-12'
      },
      {
        nombre: 'envigado f.c.',
        nombre_completo: 'envigado fútbol club s.a.',
        id_ciudad: '55',
        fundacion: '1989-10-14'
      },
      {
        nombre: 'independiente medellín',
        nombre_completo: 'corporación deportiva independiente medellín s.a.',
        id_ciudad: '12',
        fundacion: '1913-11-14'
      },
      {
        nombre: 'independiente santa fe',
        nombre_completo: 'independiente santa fe s.a.',
        id_ciudad: '176',
        fundacion: '1941-02-28'
      },
      {
        nombre: 'jaguares de córdoba',
        nombre_completo: 'jaguares fútbol club s.a.',
        id_ciudad: '498',
        fundacion: '2012-06-06'
      },
      {
        nombre: 'junior de barranquilla',
        nombre_completo: 'club deportivo popular junior f.c. s.a.',
        id_ciudad: '144',
        fundacion: '1924-08-07'
      },
      {
        nombre: 'la equidad seguros',
        nombre_completo: 'club deportivo la equidad seguros s.a.',
        id_ciudad: '176',
        fundacion: '1982-12-01'
      },
      {
        nombre: 'millonarios f.c.',
        nombre_completo: 'millonarios fútbol club s.a.',
        id_ciudad: '176',
        fundacion: '1946-06-18'
      },
      {
        nombre: 'once caldas',
        nombre_completo: 'corporación blanco y negro caldas - once caldas s.a.',
        id_ciudad: '337',
        fundacion: '1961-01-15'
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
