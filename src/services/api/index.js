import axios from 'axios';

const { InternalServerError } = axios.HttpStatusCode;

async function retryFetch(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, options);

      if (!response.data.success) {
        throw new Error(InternalServerError);
      }

      return response;
    } catch (error) {
      console.log(`Fetch failed: ${error}`);
    }

    // Wait for 1 second before retrying.
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  // All retries failed, throw an error.
  throw new Error(InternalServerError);
}

export { retryFetch };
