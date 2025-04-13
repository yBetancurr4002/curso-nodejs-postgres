const boom = require('@hapi/boom');
const connection = require('../libs/postgres.config');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await connection();

    try {
      const response = await client.query('SELECT * FROM tasks.tks_tasks');

      return {
        count: response.rowCount,
        result: response.rows,
      };
    } catch (error) {
      console.error('❌ Error ejecutando query en tks_tasks:', error);
      throw error;
    } finally {
      client.end(); // ¡Importante para cerrar la conexión!
    }
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
