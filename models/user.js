const bcrypt      = require('bcrypt');
const db          = require('../config/database');
let User          = {};

User.create = (user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  return db.one(
    `INSERT INTO users
    (first_name, last_name, email, password_digest)
    VALUES ($1, $2, $3, $4) RETURNING *`,
    [user.first_name, user.last_name, user.email, user.password]
  );
};

User.findByEmail = (email) => {
  return db.oneOrNone(
    `SELECT * FROM users
    WHERE email = $1`,
    [email]
  );
};

module.exports    = User;