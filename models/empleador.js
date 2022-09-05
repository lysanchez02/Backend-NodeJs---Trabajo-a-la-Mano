'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  empleador.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    fechanacimiento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'empleador',
  });
  return empleador;
};