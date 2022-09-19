import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  database: process.env.MYSQL_DATABASE || 'Trybesmith',
});

export default connection;