'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('dotenv/config');
const express_1 = __importDefault(require('express'));
const weeks_routes_1 = __importDefault(require('./features/weeks/weeks.routes'));
const errorHandler_1 = require('./middlewares/errorHandler');
const daily_session_routes_1 = __importDefault(require('./features/daily-session/daily-session.routes'));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', (_req, res) => {
  res.status(200).end('Welcome to learning_tracker_services!');
});
app.use('/weeks', weeks_routes_1.default);
app.use('/daily-session', daily_session_routes_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
