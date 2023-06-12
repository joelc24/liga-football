'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      id_partido: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          key: 'id',
          model: 'calendarios'
        }
      },
      id_jugador: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          key: 'id',
          model: 'jugadores'
        }
      },
      minuto: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('goles');
  }
};
