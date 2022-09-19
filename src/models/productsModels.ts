import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/productsInterface';
import connection from './connection';

const create = async (product: IProducts): Promise<ResultSetHeader> => {
  const query = 'INSERT INTO Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [product.name, product.amount]);

  return result;
};

export default { create };