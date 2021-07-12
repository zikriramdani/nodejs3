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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter your title'
        },
        len: {
          args: [20],
          msg: "Character minimum 20"
        }
      },
      field: 'title'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter your content'
        },
        len: {
          args: [200],
          msg: "Character minimum 200"
        }
      },
      field: 'content'
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter your category'
        },
        len: {
          args: [3],
          msg: "Character minimum 3"
        }
      },
      field: 'category'
    },
    status: {
      type: DataTypes.ENUM(['Publish','Draft','Thrash']),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter your Publish/Draft/Thrash'
        }
      },
      field: 'status'
    },
  }, {
    sequelize,
    modelName: 'tb_article',
  });
  return tb_article;
};