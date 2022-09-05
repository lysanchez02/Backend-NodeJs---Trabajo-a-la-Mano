'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('perfil', [{
      profesion_oficio:'meaestro de construccion',
      datos_personales:'Jose luis',
      registro_multimedia:'foto1',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfil', null, {});
  }
};