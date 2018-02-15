const path = require('path');

module.exports = {
  development: {
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },
  test: {
    connection: process.env.DATABASE_TEST_URL,
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  }
};