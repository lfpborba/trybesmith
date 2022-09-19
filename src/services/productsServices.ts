import IProducts from '../interfaces/productsInterface';
import HttpException from '../shared/httpExeception';
import productsModels from '../models/productsModels';

const isValid = (product: IProducts) => {
  if (!product.name || typeof product.name !== 'string') return false;
  if (!product.amount || typeof product.amount !== 'string') return false;

  return true;
};

const newProduct = async (product: IProducts): Promise<IProducts> => {
  if (!isValid(product)) {
    throw new HttpException(400, 'Invalid data.');
  }

  const { insertId } = await productsModels.create(product);

  return { id: insertId, ...product };
};

const getAll = async () => {
  const data = await productsModels.getAll();

  return data;
};

export default { 
  newProduct,
  getAll,
};