const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Classes extends Model {}

Classes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class_name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
        type: DataTypes.DATE,
      allowNull: false,
    },
    coach:{
        type:DataTypes.STRING,
        allowNull:false
    },
    available:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isIn:[['yes','no']],
        }
    },
    scheduled:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isIn:[['yes','no']],
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'classes',
  }
);

module.exports = Classes;
