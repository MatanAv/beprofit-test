class HttpError extends Error {
  constructor({ message = 'Error', code = 500 }) {
    super(message);
    this.code = code;
  }
}

export { HttpError };
