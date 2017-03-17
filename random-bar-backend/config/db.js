const pgp = require('pg-promise')();

const db = pgp({
  database: 'random_bar_app',
  port: 5432,
  host: 'localhost'
})

module.exports = db;
