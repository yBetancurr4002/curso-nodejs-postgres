const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host:'localhost',
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
