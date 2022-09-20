import { Router } from 'express';
import productsController from './controllers/productsControllers';
import usersController from './controllers/usersControllers';
import ordersController from './controllers/ordersController';

const routers = Router();

routers.use('/products', productsController);
routers.use('/users', usersController);
routers.use('/orders', ordersController);

export default routers;