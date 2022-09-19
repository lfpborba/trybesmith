import { Router, Request, Response } from 'express';
import usersServices from '../services/usersServices';
import createJWT from '../auth';

const usersController = Router();

usersController.post('/', async (req: Request, res: Response): Promise<Response> => {
  const newUser = await usersServices.newUser(req.body);

  const token = createJWT(newUser);

  return res.status(201).json({ token });
});

export default usersController;