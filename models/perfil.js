'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  perfil.init({
    profesion_oficio: DataTypes.STRING,
    datos_personales: DataTypes.STRING,
    registro_multimedia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'perfil',
  });
  return perfil;
};