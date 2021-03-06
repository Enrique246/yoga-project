const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull:false,
            validation:{
              isEmail:true,
            }
          },
          age:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
              isNumeric: true, 
            }
          },
          gender: {
            type: DataTypes.STRING,
            allowNull:false,
          },
          password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
              len: [2,10], 
            }
          }
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'users',
    }
       
      );
module.exports = User;