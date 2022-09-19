import { Router, Request, Response } from 'express';
import productsServices from '../services/productsServices';

const productsController = Router();

productsController.post('/', async (req: Request, res: Response): Promise<Response> => {
  const products = await productsServices.newProduct(req.body);
  return res.status(201).json(products);
});

productsController.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const productsList = await productsServices.getAll();

  return res.status(200).json(productsList);
});

export default productsController;