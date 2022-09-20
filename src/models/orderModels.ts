import { ResultSetHeader } from 'mysql2';
// import IOrders from '../interfaces/ordersInterface';
import connection from './connection';

const getAll = async (): Promise<ResultSetHeader> => {
  const query = `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY o.id
    ORDER BY o.userId;
  `;

  const [result] = await connection.execute<ResultSetHeader>(query);

  return result;
};

export default { 
  getAll,
};