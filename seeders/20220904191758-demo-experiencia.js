'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('experiencia', [{
      tiempo_experiencia:'1 año',
      ocupacion_oficio:'maestro',
      estudios:'bachiller',
      descripcion:'labora en campo de construccion en la tecnica de obra blanca',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('experiencia', null, {});
  }
};