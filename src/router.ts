import { Router } from 'express';
import productsController from './controllers/productsControllers';
import usersController from './controllers/usersControllers';

const routers = Router();

routers.use('/products', productsController);
routers.use('/users', usersController);

export default routers;