const boom = require('@hapi/boom');
// const connection = require('../libs/postgres.config');
const { models } = require('../libs/sequelize.config');


class UserService {
  constructor() {}

  async create(data) {
    if(!data) {
      throw boom.badRequest('No data entered');
    }
    const newUser = await models.User.create(data);

    return newUser;
  }

  async find() {

    try {
      const response = await models.User.findAll();

      return {
        count: response.length,
        result: response,
      };
    } catch (error) {
      console.error('❌ Error ejecutando query en tks_tasks:', error);
      throw error;
    }
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, newData) {
    const user = await this.findOne(id);

    const response = await user.update(newData);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);

    await user.destroy();
    return { id };
  }

}

module.exports = UserService;
