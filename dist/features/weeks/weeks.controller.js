"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeeks = void 0;
const errorHandler_1 = require("../../middlewares/errorHandler");
const weeks_queries_1 = require("./weeks.queries");
const getWeeks = async (_req, res, next) => {
    try {
        const weeks = await (0, weeks_queries_1.getAllWeeks)();
        res.status(200).json(weeks);
    }
    catch (err) {
        next(new errorHandler_1.AppError(err.message, 500));
    }
};
exports.getWeeks = getWeeks;
