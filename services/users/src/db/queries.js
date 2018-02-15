const mongoose = require('./connection');

function findAllUsers(userId) {
  return mongoose('users').select('*');
}

module.exports = {
  findAllUsers
};
