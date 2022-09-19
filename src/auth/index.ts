import jwt from 'jsonwebtoken';
import IUser from '../interfaces/usersInterface';

const secret = 'LoLDeixaAsPessoasInsanas';

const createJWT = (user: IUser) => {
  const token = jwt.sign({ data: user }, secret, { expiresIn: '7d', algorithm: 'HS256' });
  return token;
};

export default createJWT;