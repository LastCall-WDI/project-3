const bcrypt = require('bcrypt');
const db = require('../config/db');

const User = {};

User.create = (user) => {
  console.log('user create', user)
  const password = bcrypt.hashSync(user.password_digest, 10);
  return db.one(`
    INSERT INTO users
    (firstname, lastname, username, email, password_digest)
    VALUES
    ($1, $2, $3, $4, $5) RETURNING *`,
    [
      user.firstname,
      user.lastname,
      user.username,
      user.email,
      password
    ]);
}

User.findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1;`,
    [email]
  );
};

User.delete = (user) => {
  return db.none(`
    DELETE FROM users
    WHERE id = $1`,
    [user]
  );
};

module.exports = User;
