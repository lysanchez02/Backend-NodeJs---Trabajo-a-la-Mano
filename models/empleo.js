'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  empleo.init({
    duracionempleo: DataTypes.STRING,
    horario: DataTypes.STRING,
    cargo: DataTypes.STRING,
    salario: DataTypes.STRING,
    requisitos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'empleo',
  });
  return empleo;
};