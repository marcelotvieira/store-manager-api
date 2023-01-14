const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env);

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;