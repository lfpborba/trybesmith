import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_DATABASE || 'Trybesmith',
  port: Number(process.env.DB_PORT),
});

export default connection;