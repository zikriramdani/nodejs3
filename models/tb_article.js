'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_article.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    status: DataTypes.ENUM(['Publish','Draft','Thrash']),
  }, {
    sequelize,
    modelName: 'tb_article',
  });
  return tb_article;
};