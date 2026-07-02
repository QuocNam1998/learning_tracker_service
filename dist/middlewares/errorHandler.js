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
    console.error(`[${new Date().toISOString()}] ${err.stack}`);
    if (err instanceof SyntaxError && 'body' in err) {
        res.status(400).json({ success: false, message: 'Invalid JSON in request body' });
        return;
    }
    if (err instanceof AppError) {
        res.status(err.statusCode).json({ success: false, message: err.message });
        return;
    }
    res.status(500).json({ success: false, message: 'Something went wrong' });
};
exports.errorHandler = errorHandler;
