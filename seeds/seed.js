const sequelize = require('../config/connection');
const { Classes,User,Reservation } = require('../models');

const classesData = require('./classes-seeds');
const userData = require('./users-seeds')
const reservationData = require('./reservations-seeds')


const seedDatabase = async () => {
  console.log(userData)
  await sequelize.sync({ force: true });
  console.log(userData)

  await Classes.bulkCreate(classesData);
  await Reservation.bulkCreate(reservationData);
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  

  process.exit(0);
};


seedDatabase();
