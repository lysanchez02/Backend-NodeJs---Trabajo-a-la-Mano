'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empleo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      duracionempleo: {
        type: Sequelize.STRING
      },
      horario: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.STRING
      },
      requisitos: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empleo');
  }
};