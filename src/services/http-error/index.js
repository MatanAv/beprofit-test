import { HttpStatusCode } from 'axios';

// Custom error class for HTTP errors, which extends the basic error class and adds a status code property.
class HttpError extends Error {
  constructor({ message = 'Error', code = HttpStatusCode.InternalServerError }) {
    super(message);
    this.code = code;
  }
}

export { HttpError };
