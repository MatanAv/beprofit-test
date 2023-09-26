import orders from '@/assets/data/orders.json';
import { BASE_URL } from '@/constants/orders';
import { retryFetch } from '.';

const TEST_URL_PATH = `${BASE_URL}/test.php`;

async function getAllOrders() {
  await retryFetch(TEST_URL_PATH);

  return orders;
}

// basically, this should be a database query with pagination, and be executed on the server side with validations. client would use this function on every page change.
async function getOrdersByPage(page, limit) {
  await retryFetch(TEST_URL_PATH);

  const paginatedOrders = orders.slice(page * limit, (page + 1) * limit);

  return paginatedOrders;
}

export { getAllOrders, getOrdersByPage };
