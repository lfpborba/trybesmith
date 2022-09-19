import { ResultSetHeader } from 'mysql2';
import IProducts from "../interfaces/productsInterface";
import connection from './connection';

const create = async (product: IProducts): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>('INSERT INTO Products (name, amount) VALUES (?, ?)', [product.name, product.amount])

  return result;
};

export default { create };