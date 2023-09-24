import axios from 'axios';
import config from '@/config';
import orders from '@/assets/data/orders.json';
import { retryFetch } from '.';

const getAllOrders = async () => {
  // await retryFetch(config.api.orders.url);
  const response = await axios.get(config.api.orders.url);

  if (!response.data.success) {
    throw new Error(InternalServerError);
  }

  return orders.slice(0, 1);
};

// in a large-scale application, I would've prefer to use virtualization instead of returning all orders at once
const getOrdersByPage = async (page, limit) => {
  await retryFetch(config.api.orders.url);

  // basically, this should be a database query with pagination, and be executed on the server side with validations
  const paginatedOrders = orders.slice(page * limit, (page + 1) * limit);

  return paginatedOrders;
};

export { getAllOrders, getOrdersByPage };
