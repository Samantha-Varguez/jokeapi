'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jokes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Jokes.init({
    url: DataTypes.STRING,
    setup: DataTypes.TEXT,
    punchline: DataTypes.TEXT,
    category: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Jokes',
  });
  return Jokes;
};
