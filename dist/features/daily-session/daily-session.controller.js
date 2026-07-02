"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getDailySession = void 0;
const daily_session_queries_1 = require("./daily-session.queries");
const errorHandler_1 = require("../../middlewares/errorHandler");
const getDailySession = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        if (!start || !end) {
            throw new errorHandler_1.AppError(`Missing required dates`, 400);
        }
        const result = await (0, daily_session_queries_1.getAllDailySession)(start.toString(), end.toString());
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getDailySession = getDailySession;
const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new errorHandler_1.AppError(`Parameters are not valid`, 400);
        }
        const body = req.body;
        console.log('>>>req', req);
        console.log('>>>body', body);
        if (!body || typeof body !== 'object' || Array.isArray(body) || Object.keys(body).length === 0) {
            throw new errorHandler_1.AppError(`Request body must be a non-empty object`, 400);
        }
        const allowedFields = ['date', 'task', 'note', 'status', 'isCompleted'];
        const fields = Object.keys(body);
        console.log('>>>fields', fields);
        const invalidFields = fields.filter((f) => !allowedFields.includes(f));
        if (invalidFields.length > 0) {
            throw new errorHandler_1.AppError(`Invalid fields: ${invalidFields.join(', ')}`, 400);
        }
        const toSnakeCase = (s) => s.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
        const setClauses = fields.map((field, idx) => `${toSnakeCase(field)} = $${idx + 1}`).join(', ');
        const query = `UPDATE daily_session SET ${setClauses} WHERE id = $${fields.length + 1}`;
        const params = [...Object.values(body), id];
        const rows = await (0, daily_session_queries_1.updateTaskQuery)(query, params);
        console.log('>>>rows', rows);
        res.status(200).json('Update successfully');
    }
    catch (error) {
        next(error);
    }
};
exports.updateTask = updateTask;
