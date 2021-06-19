const sequelize = require('../config/connection');
const { Classes,User,Reservation } = require('../models');

const classesData = require('./classes-seeds');
const userData = require('./users-seeds')
const reservationData = require('./reservations-seeds')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Classes.bulkCreate(classesData);
  await User.bulkCreate(userData);
  await Reservation.bulkCreate(reservationData);
  

  process.exit(0);
};

seedDatabase();
