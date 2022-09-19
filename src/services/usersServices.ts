import HttpException from '../shared/httpExeception';
import usersModels from '../models/usersModels';
import IUser from '../interfaces/usersInterface';

const isValid = (user: IUser) => {
  if (typeof user.username !== 'string') return false;
  if (typeof user.classe !== 'string') return false;
  if (typeof user.level !== 'number') return false;
  if (typeof user.password !== 'string') return false;

  return true;
};

const newUser = async (user: IUser): Promise<IUser> => {
  if (!isValid(user)) {
    throw new HttpException(400, 'Invalid data.');
  }

  const { insertId } = await usersModels.create(user);

  return { id: insertId, ...user };
};

export default {
  newUser,
};