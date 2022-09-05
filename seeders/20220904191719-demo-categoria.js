'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categoria', [{
      nombre: 'obra blanca',
      
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null, {});
  }
};