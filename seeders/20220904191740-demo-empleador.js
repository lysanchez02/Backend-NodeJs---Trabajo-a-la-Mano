'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('empleador', [{
      nombre: 'Javir',
      apellido: 'Galindez',
      direccion: 'el tambo',
      correo: 'javier123@gmail.com',
      telefono: '3122333321',
      fechanacimiento: '13-11-1990',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('empleador', null, {});
  }
};