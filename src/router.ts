import { Router } from 'express';
import productsController from './controllers/productsControllers';

const routers = Router();

routers.use("/products",productsController);

export default routers;