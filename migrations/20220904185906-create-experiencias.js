'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('experiencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tiempo_experiencia: {
        type: Sequelize.STRING
      },
      ocupacion_oficio: {
        type: Sequelize.STRING
      },
      estudios: {
        type: Sequelize.STRING
      },
      descripcion: {
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
    await queryInterface.dropTable('experiencia');
  }
};