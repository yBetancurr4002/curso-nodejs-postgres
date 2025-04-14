const { UserSchema, User } = require('./user.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  console.log('✅ Modelo User inicializado');
}

module.exports = setupModels;
