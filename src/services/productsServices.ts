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
  // product.id = insertId;

  return { id: insertId, ...product };
};

export default { newProduct };