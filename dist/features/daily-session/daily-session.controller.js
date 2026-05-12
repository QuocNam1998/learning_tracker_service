"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDailySession = void 0;
const daily_session_queries_1 = require("./daily-session.queries");
const getDailySession = async (_req, res, next) => {
    try {
        const result = await (0, daily_session_queries_1.getAllDailySession)();
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getDailySession = getDailySession;
