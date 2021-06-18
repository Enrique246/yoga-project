const sequelize = require('../config/connection');
const { Classes } = require('../models');

const exampleData = require('./exampleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Classes.bulkCreate(exampleData);

  process.exit(0);
};

seedDatabase();
