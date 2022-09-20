// import HttpException from '../shared/httpExeception';
import ordersModels from '../models/orderModels';

const getAll = async () => {
  const data = await ordersModels.getAll();

  return data;
};

export default { 
  getAll,
};