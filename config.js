require('dotenv').config();

const dbConfig = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  schema: 'organisation',
}

module.exports = dbConfig;