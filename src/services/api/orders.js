import axios from 'axios';
import config from '@/config';
import orders from '@/assets/data/orders.json';

const { InternalServerError } = axios.HttpStatusCode;

const getAllOrders = async () => {
  const response = await axios.get(config.api.orders.url);

  if (!response.data.success) {
    throw new Error(InternalServerError);
  }

  return orders;
};

// in a large-scale application, I would've prefer to use pagination instead of returning all orders at once
const getOrdersByPage = async (page, limit) => {
  const response = await axios.get(config.api.orders.url);

  if (!response.data.success) {
    throw new Error(InternalServerError);
  }

  // basically, this should be a database query with pagination, and be executed on the server side with validation
  const paginatedOrders = orders.slice(page * limit, (page + 1) * limit);

  return paginatedOrders;
};

export { getAllOrders, getOrdersByPage };
