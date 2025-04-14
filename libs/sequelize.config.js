const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);

const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
console.log('🛠 URI de conexión:', URI);
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: (msg) => console.log('📦 Sequelize:', msg),
});

// Test de conexión
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión exitosa con PostgreSQL');
  })
  .catch((err) => {
    console.error('❌ Falló la conexión con PostgreSQL:', err);
  });

setupModels(sequelize);
sequelize.sync()
  .then(() => console.log('✅ Tablas sincronizadas con éxito'))
  .catch(err => console.error('❌ Error al sincronizar las tablas', err));

module.exports = sequelize;
