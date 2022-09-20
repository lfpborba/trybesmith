import { Router, Request, Response } from 'express';
import ordersServices from '../services/orderServices';

const ordersController = Router();

ordersController.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const ordersList = await ordersServices.getAll();

  return res.status(200).json(ordersList);
});

export default ordersController;