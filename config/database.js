const pgp         = require('pg-promise')();

let connection = {
  port: 5432,
  host: 'localhost'
};

// if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
//   connection.database = 'reading_list_development';
// } else if (process.env.NODE_ENV === 'test') {
//   connection.database = 'reading_list_test';
// } else if (process.env.NODE_ENV === 'production') {
//   connection.database = 'reading_list_production';
// }

connection.database = process.env.NODE_ENV === 'test' ? 'reading_list_test' : 'reading_list_development';

module.exports = pgp(connection);