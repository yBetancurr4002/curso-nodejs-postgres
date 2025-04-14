const { Model } = require ('sequelize');
const { USER_TABLE } = require('../models/user.model');


class User extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timeStamps: false,
    }

  }
}

module.exports = { User }
