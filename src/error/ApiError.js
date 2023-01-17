const { StatusCodes } = require('http-status-codes');

class ApiError {
  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  static notFound(message) {
    throw new ApiError(message, StatusCodes.NOT_FOUND);
  }

  static unauthorized(message) {
    throw new ApiError(message, StatusCodes.UNAUTHORIZED);
  }

  static unprocessable(message) {
    throw new ApiError(message, StatusCodes.UNPROCESSABLE_ENTITY);
  }

  static badRequest(message) {
    throw new ApiError(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = ApiError;