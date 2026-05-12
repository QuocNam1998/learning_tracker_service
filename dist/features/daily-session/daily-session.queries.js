"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDailySession = void 0;
const db_1 = __importDefault(require("../../db"));
const getAllDailySession = async () => {
    const result = await db_1.default.query('select * from daily_session');
    return result.rows;
};
exports.getAllDailySession = getAllDailySession;
