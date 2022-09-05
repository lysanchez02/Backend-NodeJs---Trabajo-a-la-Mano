'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('postulante', [{
      nombre: 'Jose',
      apellido: 'Galindo',
      direccion: 'timbio',
      correo: 'josegalindo@gmail.com',
      telefono: '3122463822',
      fechanacimiento: '21-11-1990',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('postulante', null, {});
  }
};