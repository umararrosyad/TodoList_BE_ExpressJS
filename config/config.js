require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'todo_list',
    host: 'localhost',
    dialect: 'postgres',
    logging : false
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'todo_list_test',
    host: 'localhost',
    dialect: 'postgres',
    logging : false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'todo_list_pro',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
