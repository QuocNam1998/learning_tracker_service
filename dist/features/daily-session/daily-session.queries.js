"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskQuery = exports.getAllDailySession = void 0;
const db_1 = __importDefault(require("../../configs/db"));
const getAllDailySession = async (start, end) => {
    const result = await db_1.default.query('SELECT * FROM daily_session WHERE date >= $1 AND date < $2 ORDER BY date', [
        decodeURIComponent(start),
        decodeURIComponent(end),
    ]);
    const dailySessions = result.rows ?? [];
    if (!dailySessions.length) {
        return await createDailySession();
    }
    return dailySessions;
};
exports.getAllDailySession = getAllDailySession;
const createDailySession = async () => {
    const query = `INSERT INTO daily_session (week_id, date, session_type, notes, is_completed)
VALUES
  (1, (CURRENT_DATE + interval '13 hours') AT TIME ZONE 'UTC', 'calisthenics', 'full-body: pull + push + legs', false),
  (1, (CURRENT_DATE + interval '14 hours') AT TIME ZONE 'UTC', 'technical', 'postgres: continue resolving hackerrank exercise', false),
  (1, (CURRENT_DATE + interval '15 hours') AT TIME ZONE 'UTC', 'english', 'learna-ai: review one topic and learn the new one', false)
ON CONFLICT ON CONSTRAINT unique_week_date DO UPDATE
SET session_type = EXCLUDED.session_type,
    notes = EXCLUDED.notes,
    is_completed = EXCLUDED.is_completed
RETURNING *`;
    const result = await db_1.default.query(query);
    return result.rows;
};
const updateTaskQuery = async (query, params) => {
    const result = await db_1.default.query(query, params);
    console.log('>>>result', result);
    return result.rows;
};
exports.updateTaskQuery = updateTaskQuery;
