require('dotenv').config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOSTNAME,
  DB_DIALECT,
  DB_PORT,
} = process.env;

const defaultConfig = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOSTNAME,
  dialect: DB_DIALECT,
  port: DB_PORT,
  pool: {
    max: 32,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  development: { ...defaultConfig },
  test: { ...defaultConfig },
  production: { ...defaultConfig },
};
