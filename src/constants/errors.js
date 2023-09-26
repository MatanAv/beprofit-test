import { HttpStatusCode as codes } from 'axios';

const errors = {
  InternalServerError: {
    code: codes.InternalServerError,
    message: 'Internal Server Error'
  }
};

export { errors };
