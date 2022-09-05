'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('empleo', [{
      duracionempleo:'1 año',
      horario:'7:00-17:00',
      cargo:'maestro de obra',
      salario:'1200000',
      requisitos:'carta laboral',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('empleo', null, {});
  }
};