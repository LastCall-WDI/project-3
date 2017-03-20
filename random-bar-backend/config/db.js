const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || {
  host: 'localhost',
  port: 5432,
  database: 'random_bar_app'
})

module.exports = db;
