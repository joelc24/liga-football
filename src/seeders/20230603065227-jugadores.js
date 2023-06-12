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
        nombre: 'carlos',
        apellido: 'bejarano castillo',
        fecha_nacimiento: '1985-03-02',
        id_posicion: '1',
        id_equipo: '1'
      },
      {
        nombre: 'daniel',
        apellido: 'muñoz mejía',
        fecha_nacimiento: '1996-09-22',
        id_posicion: '2',
        id_equipo: '1'
      },
      {
        nombre: 'carlos',
        apellido: 'ramírez torres',
        fecha_nacimiento: '1990-01-24',
        id_posicion: '3',
        id_equipo: '1'
      },
      {
        nombre: 'elkin',
        apellido: 'blanco rivas',
        fecha_nacimiento: '1990-04-14',
        id_posicion: '4',
        id_equipo: '1'
      },
      {
        nombre: 'mauricio',
        apellido: 'gómez giraldo',
        fecha_nacimiento: '1992-01-08',
        id_posicion: '5',
        id_equipo: '1'
      },
      {
        nombre: 'anthony',
        apellido: 'uribe montaño',
        fecha_nacimiento: '1988-06-25',
        id_posicion: '6',
        id_equipo: '1'
      },
      {
        nombre: 'josé luis',
        apellido: 'chunga romero',
        fecha_nacimiento: '1990-07-18',
        id_posicion: '1',
        id_equipo: '2'
      },
      {
        nombre: 'mateo',
        apellido: 'rodas giraldo',
        fecha_nacimiento: '1996-08-15',
        id_posicion: '3',
        id_equipo: '2'
      },
      {
        nombre: 'pedro',
        apellido: 'franco ulloa',
        fecha_nacimiento: '1989-04-23',
        id_posicion: '3',
        id_equipo: '2'
      },
      {
        nombre: 'freddy',
        apellido: 'flórez rodríguez',
        fecha_nacimiento: '1991-06-12',
        id_posicion: '4',
        id_equipo: '2'
      },
      {
        nombre: 'harrison',
        apellido: 'mojica palacios',
        fecha_nacimiento: '1992-02-21',
        id_posicion: '5',
        id_equipo: '2'
      },
      {
        nombre: 'steven',
        apellido: 'rodríguez castañeda',
        fecha_nacimiento: '1997-03-17',
        id_posicion: '6',
        id_equipo: '2'
      },
      {
        nombre: 'diego',
        apellido: 'novoa rodríguez',
        fecha_nacimiento: '1988-08-30',
        id_posicion: '1',
        id_equipo: '3'
      },
      {
        nombre: 'kevin',
        apellido: 'andrade riascos',
        fecha_nacimiento: '1998-01-11',
        id_posicion: '3',
        id_equipo: '3'
      },
      {
        nombre: 'pedro',
        apellido: 'franco ulloa',
        fecha_nacimiento: '1989-04-23',
        id_posicion: '3',
        id_equipo: '3'
      },
      {
        nombre: 'luis',
        apellido: 'paz arboleda',
        fecha_nacimiento: '1987-07-11',
        id_posicion: '4',
        id_equipo: '3'
      },
      {
        nombre: 'cristian',
        apellido: 'barrios castillo',
        fecha_nacimiento: '1996-01-22',
        id_posicion: '5',
        id_equipo: '3'
      },
      {
        nombre: 'adrián',
        apellido: 'ramos viáfara',
        fecha_nacimiento: '1986-01-22',
        id_posicion: '6',
        id_equipo: '3'
      },
      {
        nombre: 'Jhon',
        apellido: 'Pérez García',
        fecha_nacimiento: '1995-04-12',
        id_posicion: '1',
        id_equipo: '4'
      },
      {
        nombre: 'Carlos',
        apellido: 'Ramírez López',
        fecha_nacimiento: '1992-07-23',
        id_posicion: '2',
        id_equipo: '4'
      },
      {
        nombre: 'Diego',
        apellido: 'Torres Sánchez',
        fecha_nacimiento: '1994-10-05',
        id_posicion: '3',
        id_equipo: '4'
      },
      {
        nombre: 'Luis',
        apellido: 'Gómez Castro',
        fecha_nacimiento: '1996-01-15',
        id_posicion: '4',
        id_equipo: '4'
      },
      {
        nombre: 'Andrés',
        apellido: 'Martínez Rojas',
        fecha_nacimiento: '1993-03-18',
        id_posicion: '5',
        id_equipo: '4'
      },
      {
        nombre: 'Juan Fernando',
        apellido: 'Quintero Paniagua',
        fecha_nacimiento: '1993-01-18',
        id_posicion: '6',
        id_equipo: '4'
      },
      {
        nombre: 'David',
        apellido: 'González Ortiz',
        fecha_nacimiento: '1987-07-20',
        id_posicion: '1',
        id_equipo: '5'
      },
      {
        nombre: 'Juan',
        apellido: 'Camilo Pérez',
        fecha_nacimiento: '1990-08-10',
        id_posicion: '2',
        id_equipo: '5'
      },
      {
        nombre: 'Luis',
        apellido: 'Cardoza Acosta',
        fecha_nacimiento: '1991-11-02',
        id_posicion: '3',
        id_equipo: '5'
      },
      {
        nombre: 'Michael',
        apellido: 'Ordoñez Rivas',
        fecha_nacimiento: '1994-02-14',
        id_posicion: '4',
        id_equipo: '5'
      },
      {
        nombre: 'Diego',
        apellido: 'Arias Rentería',
        fecha_nacimiento: '1988-05-17',
        id_posicion: '5',
        id_equipo: '5'
      },
      {
        nombre: 'Bayron',
        apellido: 'García Valencia',
        fecha_nacimiento: '1995-06-19',
        id_posicion: '6',
        id_equipo: '5'
      },
      {
        nombre: 'Aldair',
        apellido: 'Quintana Rojas',
        fecha_nacimiento: '1994-09-25',
        id_posicion: '1',
        id_equipo: '6'
      },
      {
        nombre: 'Yerson',
        apellido: 'Candelo Quintero',
        fecha_nacimiento: '1992-02-25',
        id_posicion: '2',
        id_equipo: '6'
      },
      {
        nombre: 'Emmanuel',
        apellido: 'Olivera Núñez',
        fecha_nacimiento: '1991-01-15',
        id_posicion: '3',
        id_equipo: '6'
      },
      {
        nombre: 'Baldomero',
        apellido: 'Perlaza Perlaza',
        fecha_nacimiento: '1991-03-05',
        id_posicion: '4',
        id_equipo: '6'
      },
      {
        nombre: 'Jarlan',
        apellido: 'Barrera Escalona',
        fecha_nacimiento: '1995-09-16',
        id_posicion: '5',
        id_equipo: '6'
      },
      {
        nombre: 'Jefferson',
        apellido: 'Duque Montoya',
        fecha_nacimiento: '1987-04-02',
        id_posicion: '6',
        id_equipo: '6'
      },
      {
        nombre: 'Rogerio',
        apellido: 'Caicedo Zambrano',
        fecha_nacimiento: '1990-06-10',
        id_posicion: '1',
        id_equipo: '7'
      },
      {
        nombre: 'Frank',
        apellido: 'Lozano Rojas',
        fecha_nacimiento: '1993-08-12',
        id_posicion: '2',
        id_equipo: '7'
      },
      {
        nombre: 'José',
        apellido: 'Mosquera Hurtado',
        fecha_nacimiento: '1994-11-20',
        id_posicion: '3',
        id_equipo: '7'
      },
      {
        nombre: 'Jhon',
        apellido: 'González Riascos',
        fecha_nacimiento: '1995-02-18',
        id_posicion: '4',
        id_equipo: '7'
      },
      {
        nombre: 'Diego',
        apellido: 'Echeverri Palacio',
        fecha_nacimiento: '1992-05-22',
        id_posicion: '5',
        id_equipo: '7'
      },
      {
        nombre: 'Milton',
        apellido: 'Celis Rincón',
        fecha_nacimiento: '1989-03-28',
        id_posicion: '6',
        id_equipo: '7'
      },
      {
        nombre: 'Luis',
        apellido: 'Vásquez Valencia',
        fecha_nacimiento: '1996-07-14',
        id_posicion: '1',
        id_equipo: '8'
      },
      {
        nombre: 'Wilmer',
        apellido: 'Palacios Mosquera',
        fecha_nacimiento: '1990-09-24',
        id_posicion: '2',
        id_equipo: '8'
      },
      {
        nombre: 'Jackson',
        apellido: 'Montaño Arboleda',
        fecha_nacimiento: '1991-12-06',
        id_posicion: '3',
        id_equipo: '8'
      },
      {
        nombre: 'Didier',
        apellido: 'Pino Mina',
        fecha_nacimiento: '1994-04-16',
        id_posicion: '4',
        id_equipo: '8'
      },
      {
        nombre: 'Jairo',
        apellido: 'Borrero Rentería',
        fecha_nacimiento: '1993-06-26',
        id_posicion: '5',
        id_equipo: '8'
      },
      {
        nombre: 'Diber',
        apellido: 'Cambindo Hurtado',
        fecha_nacimiento: '1988-10-08',
        id_posicion: '6',
        id_equipo: '8'
      },
      {
        nombre: 'Álvaro',
        apellido: 'Montero Perales',
        fecha_nacimiento: '1995-03-29',
        id_posicion: '1',
        id_equipo: '9'
      },
      {
        nombre: 'Nilson',
        apellido: 'Castrillón Valencia',
        fecha_nacimiento: '1993-07-31',
        id_posicion: '2',
        id_equipo: '9'
      },
      {
        nombre: 'Sergio',
        apellido: 'Mosquera Segura',
        fecha_nacimiento: '1994-11-09',
        id_posicion: '3',
        id_equipo: '9'
      },
      {
        nombre: 'Juan David',
        apellido: 'Ríos Cortés',
        fecha_nacimiento: '1996-02-21',
        id_posicion: '4',
        id_equipo: '9'
      },
      {
        nombre: 'Anderson',
        apellido: 'Plata Ortiz',
        fecha_nacimiento: '1991-05-19',
        id_posicion: '5',
        id_equipo: '9'
      },
      {
        nombre: 'Jaminton',
        apellido: 'Campaz Hurtado',
        fecha_nacimiento: '2000-10-31',
        id_posicion: '6',
        id_equipo: '9'
      },
      {
        nombre: 'Guillermo',
        apellido: 'De Amores Luzuriaga',
        fecha_nacimiento: '1994-08-03',
        id_posicion: '1',
        id_equipo: '10'
      },
      {
        nombre: 'Darwin',
        apellido: 'Andrade Rentería',
        fecha_nacimiento: '1991-02-14',
        id_posicion: '2',
        id_equipo: '10'
      },
      {
        nombre: 'Jorge',
        apellido: 'Arias Murillo',
        fecha_nacimiento: '1992-09-25',
        id_posicion: '3',
        id_equipo: '10'
      },
      {
        nombre: 'Andrés',
        apellido: 'Colorado Sánchez',
        fecha_nacimiento: '1994-01-17',
        id_posicion: '4',
        id_equipo: '10'
      },
      {
        nombre: 'Agustín',
        apellido: 'Palavecino Oliva',
        fecha_nacimiento: '1996-05-03',
        id_posicion: '5',
        id_equipo: '10'
      },
      {
        nombre: 'Marco',
        apellido: 'Pérez Murillo',
        fecha_nacimiento: '1990-04-07',
        id_posicion: '6',
        id_equipo: '10'
      },
      {
        nombre: 'Diego',
        apellido: 'Martínez Lloreda',
        fecha_nacimiento: '1993-06-27',
        id_posicion: '1',
        id_equipo: '11'
      },
      {
        nombre: 'Fabian',
        apellido: 'Viáfara Mina',
        fecha_nacimiento: '1990-07-29',
        id_posicion: '2',
        id_equipo: '11'
      },
      {
        nombre: 'Hernán',
        apellido: 'Pertuz Ortega',
        fecha_nacimiento: '1989-11-11',
        id_posicion: '3',
        id_equipo: '11'
      },
      {
        nombre: 'Camilo',
        apellido: 'Ayala Zuluaga',
        fecha_nacimiento: '1992-04-23',
        id_posicion: '4',
        id_equipo: '11'
      },
      {
        nombre: 'Ederson',
        apellido: 'Moreno Rentería',
        fecha_nacimiento: '1994-01-19',
        id_posicion: '5',
        id_equipo: '11'
      },
      {
        nombre: 'Ray Vanegas',
        apellido: '',
        fecha_nacimiento: '1995-09-21',
        id_posicion: '6',
        id_equipo: '11'
      },
      {
        nombre: 'Harlen',
        apellido: 'Castillo García',
        fecha_nacimiento: '1994-08-30',
        id_posicion: '1',
        id_equipo: '12'
      },
      {
        nombre: 'Francisco',
        apellido: 'Córdoba Mosquera',
        fecha_nacimiento: '1992-07-01',
        id_posicion: '2',
        id_equipo: '12'
      },
      {
        nombre: 'Danny',
        apellido: 'Cano Rendón',
        fecha_nacimiento: '1990-12-15',
        id_posicion: '3',
        id_equipo: '12'
      },
      {
        nombre: 'Jorge',
        apellido: 'Flórez Zapata',
        fecha_nacimiento: '1995-04-09',
        id_posicion: '4',
        id_equipo: '12'
      },
      {
        nombre: 'Jairo',
        apellido: 'Molina Palacios',
        fecha_nacimiento: '1993-06-03',
        id_posicion: '5',
        id_equipo: '12'
      },
      {
        nombre: 'Wilfrido',
        apellido: 'De La Rosa Díaz',
        fecha_nacimiento: '1996-10-17',
        id_posicion: '6',
        id_equipo: '12'
      },
      {
        nombre: 'Santiago',
        apellido: 'Londoño Restrepo',
        fecha_nacimiento: '1996-09-07',
        id_posicion: '1',
        id_equipo: '13'
      },
      {
        nombre: 'Santiago',
        apellido: 'Ruiz Arboleda',
        fecha_nacimiento: '1994-07-13',
        id_posicion: '2',
        id_equipo: '13'
      },
      {
        nombre: 'Santiago',
        apellido: 'Noreña Zapata',
        fecha_nacimiento: '1993-11-23',
        id_posicion: '3',
        id_equipo: '13'
      },
      {
        nombre: 'Iván',
        apellido: 'Rojas Ríos',
        fecha_nacimiento: '1995-04-27',
        id_posicion: '4',
        id_equipo: '13'
      },
      {
        nombre: 'Jáder',
        apellido: 'Maza Carabalí',
        fecha_nacimiento: '1992-01-29',
        id_posicion: '5',
        id_equipo: '13'
      },
      {
        nombre: 'Yeison',
        apellido: 'Guzmán Valencia',
        fecha_nacimiento: '1998-10-11',
        id_posicion: '6',
        id_equipo: '13'
      },
      {
        nombre: 'Andrés',
        apellido: 'Mosquera Marmolejo',
        fecha_nacimiento: '1994-08-16',
        id_posicion: '1',
        id_equipo: '14'
      },
      {
        nombre: 'Juan',
        apellido: 'Arboleda Zapata',
        fecha_nacimiento: '1996-07-21',
        id_posicion: '2',
        id_equipo: '14'
      },
      {
        nombre: 'Andrés',
        apellido: 'Cadavid Cardona',
        fecha_nacimiento: '1985-12-07',
        id_posicion: '3',
        id_equipo: '14'
      },
      {
        nombre: 'David',
        apellido: 'Loaiza Quintero',
        fecha_nacimiento: '1993-04-19',
        id_posicion: '4',
        id_equipo: '14'
      },
      {
        nombre: 'Javier',
        apellido: 'Reina Valenzuela',
        fecha_nacimiento: '1989-01-25',
        id_posicion: '5',
        id_equipo: '14'
      },
      {
        nombre: 'Agustín',
        apellido: 'Vuletich Capano',
        fecha_nacimiento: '1992-10-05',
        id_posicion: '6',
        id_equipo: '14'
      },
      {
        nombre: 'Leandro',
        apellido: 'Castellanos Rueda',
        fecha_nacimiento: '1984-06-09',
        id_posicion: '1',
        id_equipo: '15'
      },
      {
        nombre: 'Carlos',
        apellido: 'Arboleda Mosquera',
        fecha_nacimiento: '1990-09-02',
        id_posicion: '2',
        id_equipo: '15'
      },
      {
        nombre: 'Fabián',
        apellido: 'Sambueza Zapata',
        fecha_nacimiento: '1988-11-01',
        id_posicion: '3',
        id_equipo: '15'
      },
      {
        nombre: 'Daniel',
        apellido: 'Giraldo Duque',
        fecha_nacimiento: '1992-04-13',
        id_posicion: '4',
        id_equipo: '15'
      },
      {
        nombre: 'Jhon',
        apellido: 'Velásquez Uribe',
        fecha_nacimiento: '1997-06-17',
        id_posicion: '5',
        id_equipo: '15'
      },
      {
        nombre: 'Diego',
        apellido: 'Valdés Manosalva',
        fecha_nacimiento: '1994-10-29',
        id_posicion: '6',
        id_equipo: '15'
      },
      {
        nombre: 'José',
        apellido: 'Escobar Hurtado',
        fecha_nacimiento: '1993-07-23',
        id_posicion: '1',
        id_equipo: '16'
      },
      {
        nombre: 'Fabio',
        apellido: 'Castillo Rentería',
        fecha_nacimiento: '1992-08-15',
        id_posicion: '2',
        id_equipo: '16'
      },
      {
        nombre: 'Israel',
        apellido: 'Alba Gutiérrez',
        fecha_nacimiento: '1994-11-27',
        id_posicion: '3',
        id_equipo: '16'
      },
      {
        nombre: 'Kevin',
        apellido: 'Riascos Palacios',
        fecha_nacimiento: '1995-04-07',
        id_posicion: '4',
        id_equipo: '16'
      },
      {
        nombre: 'Pablo',
        apellido: 'Bueno López',
        fecha_nacimiento: '1991-01-31',
        id_posicion: '5',
        id_equipo: '16'
      },
      {
        nombre: 'Pablo',
        apellido: 'Rojas Gutiérrez',
        fecha_nacimiento: '1989-10-09',
        id_posicion: '6',
        id_equipo: '16'
      },
      {
        nombre: 'Sebastián',
        apellido: 'Viera Rodríguez',
        fecha_nacimiento: '1983-03-07',
        id_posicion: '1',
        id_equipo: '17'
      },
      {
        nombre: 'Marlon',
        apellido: 'Piedrahita Rengifo',
        fecha_nacimiento: '1987-08-21',
        id_posicion: '2',
        id_equipo: '17'
      },
      {
        nombre: 'Willer',
        apellido: 'Ditta Ospino',
        fecha_nacimiento: '1995-12-03',
        id_posicion: '3',
        id_equipo: '17'
      },
      {
        nombre: 'Larry',
        apellido: 'Vásquez Carvajal',
        fecha_nacimiento: '1994-04-29',
        id_posicion: '4',
        id_equipo: '17'
      },
      {
        nombre: 'Fredy',
        apellido: 'Hinestroza Arias',
        fecha_nacimiento: '1990-05-10',
        id_posicion: '5',
        id_equipo: '17'
      },
      {
        nombre: 'Miguel',
        apellido: 'Borja Hernández',
        fecha_nacimiento: '1993-01-26',
        id_posicion: '6',
        id_equipo: '17'
      },
      {
        nombre: 'Sebastián',
        apellido: 'Viera Rodríguez',
        fecha_nacimiento: '1983-03-07',
        id_posicion: '1',
        id_equipo: '17'
      },
      {
        nombre: 'Marlon',
        apellido: 'Piedrahita Rengifo',
        fecha_nacimiento: '1987-08-21',
        id_posicion: '2',
        id_equipo: '17'
      },
      {
        nombre: 'Willer',
        apellido: 'Ditta Ospino',
        fecha_nacimiento: '1995-12-03',
        id_posicion: '3',
        id_equipo: '17'
      },
      {
        nombre: 'Larry',
        apellido: 'Vásquez Carvajal',
        fecha_nacimiento: '1994-04-29',
        id_posicion: '4',
        id_equipo: '17'
      },
      {
        nombre: 'Fredy',
        apellido: 'Hinestroza Arias',
        fecha_nacimiento: '1990-05-10',
        id_posicion: '5',
        id_equipo: '17'
      },
      {
        nombre: 'Miguel',
        apellido: 'Borja Hernández',
        fecha_nacimiento: '1993-01-26',
        id_posicion: '6',
        id_equipo: '17'
      },
      {
        nombre: 'David',
        apellido: 'Camacho Quiñones',
        fecha_nacimiento: '1992-07-15',
        id_posicion: '5',
        id_equipo: '18'
      },
      {
        nombre: 'Carlos',
        apellido: 'Peralta Quintero',
        fecha_nacimiento: '1988-09-18',
        id_posicion: '6',
        id_equipo: '18'
      },
      {
        nombre: 'Andrés Felipe',
        apellido: 'Correa Valencia',
        fecha_nacimiento: '1994-05-25',
        id_posicion: '3',
        id_equipo: '18'
      },
      {
        nombre: 'Stalin',
        apellido: 'Motta Arboleda',
        fecha_nacimiento: '1984-03-10',
        id_posicion: '4',
        id_equipo: '18'
      },
      {
        nombre: 'Diego',
        apellido: 'Valoyes Córdoba',
        fecha_nacimiento: '1997-02-02',
        id_posicion: '5',
        id_equipo: '18'
      },
      {
        nombre: 'Christian',
        apellido: 'Vargas Bernal',
        fecha_nacimiento: '1989-03-09',
        id_posicion: '1',
        id_equipo: '19'
      },
      {
        nombre: 'Elvis',
        apellido: 'Perlaza Mosquera',
        fecha_nacimiento: '1990-01-22',
        id_posicion: '2',
        id_equipo: '19'
      },
      {
        nombre: 'Andrés Felipe',
        apellido: 'Román Mejía',
        fecha_nacimiento: '1996-02-11',
        id_posicion: '2',
        id_equipo: '19'
      },
      {
        nombre: 'Juan Pablo',
        apellido: 'Vargas Mora',
        fecha_nacimiento: '1993-10-10',
        id_posicion: '3',
        id_equipo: '19'
      },
      {
        nombre: 'Daniel',
        apellido: 'Ruiz Asprilla',
        fecha_nacimiento: '1997-01-25',
        id_posicion: '3',
        id_equipo: '19'
      },
      {
        nombre: 'Gerardo',
        apellido: 'Ortiz Núñez',
        fecha_nacimiento: '1990-03-24',
        id_posicion: '1',
        id_equipo: '20'
      },
      {
        nombre: 'David',
        apellido: 'Gómez Ortiz',
        fecha_nacimiento: '1994-02-06',
        id_posicion: '2',
        id_equipo: '20'
      },
      {
        nombre: 'Andrés Felipe',
        apellido: 'Correa Vélez',
        fecha_nacimiento: '1993-05-25',
        id_posicion: '3',
        id_equipo: '20'
      },
      {
        nombre: 'Harrison',
        apellido: 'Otálvaro Arce',
        fecha_nacimiento: '1988-01-22',
        id_posicion: '4',
        id_equipo: '20'
      },
      {
        nombre: 'Ménder',
        apellido: 'García Quiñones',
        fecha_nacimiento: '1995-07-14',
        id_posicion: '6',
        id_equipo: '20'
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

    await queryInterface.bulkDelete('jugadores', null, {});
  }
};
