const db = require('../config/db');

const Bar = {};

Bar.addToFavorites = (bar) => {
  return db.none(
    `INSERT INTO saved_bars
    (name, rating, phone, price, address, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6)`,
    [bar.name, bar.rating, bar.phone, bar.price, bar.address, bar.user_id]
  );
}

Bar.findByUserEmail = (email) => {
  return db.query(
    `SELECT
      saved_bars.id,
      saved_bars.name,
      saved_bars.rating,
      saved_bars.address,
      saved_bars.phone,
      users.email,
      users.firstname,
      user_id
    FROM saved_bars
    LEFT OUTER JOIN users
    ON users.id = saved_bars.user_id
    WHERE email = $1`,
    [email]
  );
}

Bar.delete = (barId, userId) => {
  return db.none(
    `DELETE FROM saved_bars
    WHERE id = $1 AND user_id = $2`,
    [barId, userId]
  );
}

module.exports = Bar;
