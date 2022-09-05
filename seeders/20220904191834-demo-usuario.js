'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usuario', [{
      nombre:'Sebastian',
      apellido:'Lopez',
      correo:'sebaslopez@gmail.com',
      telefono:'32414455232',
      contraseña:'123456789',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};