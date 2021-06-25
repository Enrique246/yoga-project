const Classes = require('./Classes');
const Reservation = require('./Reservations');
const User = require('./Users');
const sequelize = require('sequelize')

User.belongsToMany(Classes,{
    through:"reservations",
})

Classes.belongsToMany(User,{
    through:"reservations",
})
module.exports = { Classes, Reservation, User};
