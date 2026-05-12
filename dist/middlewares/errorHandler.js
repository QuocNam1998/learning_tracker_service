"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.AppError = void 0;
class AppError extends Error {
    constructor(errorMessage, statusCode) {
        super(errorMessage);
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}
exports.AppError = AppError;
const errorHandler = (err, _req, res, _next) => {
    const appErr = err;
    const message = appErr.isOperational ? appErr.message : "Something went wrong";
    const statusCode = appErr.statusCode || 500;
    console.error(`[${new Date().toISOString()}] ${err.stack}`);
    res.status(statusCode).json({ success: false, message });
};
exports.errorHandler = errorHandler;
