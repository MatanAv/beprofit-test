import axios from 'axios';

const codes = axios.HttpStatusCode;

const errors = {
  InternalServerError: {
    code: codes.InternalServerError,
    message: 'Internal Server Error'
  }
};

export { errors };
