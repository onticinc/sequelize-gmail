'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newEmail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  newEmail.init({
    toEmail: DataTypes.STRING,
    subject: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'newEmail',
  });
  return newEmail;
};