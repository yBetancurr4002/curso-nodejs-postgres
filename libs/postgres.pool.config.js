const { Pool } = require('pg');
const { config } = require('../config/config');

// const pool = new Pool({
//     host:'localhost',
//     port: process.env.POSTGRES_PORT,
//     user: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DB,
//   });

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({
  connectionString: URI
});

module.exports = pool;
