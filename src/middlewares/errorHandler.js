class AppError extends Error {
  constructor(errorMessage, statusCode) {
    supper(errorMessage);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

const errorHandler = async (err, req, res, next) => {
  const message = err.isOperational ? err.message : "Something went wrong";
  const statusCode = err.statusCode || 500;
  console.error(`[${new Date().toISOString()}] ${err.stack}`);
  res.statusCode(statusCode).json({ success: false, message });
};

module.exports = {
  AppError,
  errorHandler,
};
