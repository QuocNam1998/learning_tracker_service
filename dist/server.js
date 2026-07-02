"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./configs/db");
const express_1 = __importDefault(require("express"));
const env_1 = require("./configs/env");
const app_1 = __importDefault(require("./app"));
const errorHandler_1 = require("./middlewares/errorHandler");
const cors_1 = __importDefault(require("./configs/cors"));
const app = (0, express_1.default)();
app.use(cors_1.default);
app.use(express_1.default.json());
app.use(app_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(env_1.PORT, () => {
    console.log(`Server is running on port: ${env_1.PORT}`);
});
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled promise rejection:', reason);
});
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err.message, err.stack);
    // Connection errors from pg are recoverable — don't exit the process.
    if (err.message?.includes('Connection terminated') || err.message?.includes('connect ECONNREFUSED')) {
        return;
    }
    process.exit(1);
});
