const {Model, DataTypes} =require('sequelize');
const sequelize = require ('../config/connection');

class Reservation extends Model {}

Reservation.init( 
{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
    },
    class_id: {
        type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservations',
      }
    
    );