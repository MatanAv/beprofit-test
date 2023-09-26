import axios from 'axios';
import { HttpError } from '../http-error';
import { errors } from '@/constants/errors';
import { MAX_ATTEMPTS, RETRY_DELAY } from '@/constants/api';

async function retryFetch(url, options, retries = MAX_ATTEMPTS) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, options);

      if (!response.data.success) {
        throw new HttpError(errors.InternalServerError);
      }

      return response;
    } catch (error) {
      console.log(`Fetch failed: ${error}`);
    }

    // Wait for 1 second before retrying.
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
  }

  // All retries failed, throw an error.
  throw new HttpError(errors.InternalServerError);
}

export { retryFetch };
