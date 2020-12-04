require("dotenv").config();

const development = {
  username: process.env.DB_USERNME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATAGASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  timezone: "+09:00",
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
};

const test = {
  username: process.env.DB_USERNME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATAGASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  timezone: "+09:00",
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
};

const production = {
  username: process.env.DB_USERNME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATAGASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  timezone: "+09:00",
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
};

module.exports = { development, test, production };
