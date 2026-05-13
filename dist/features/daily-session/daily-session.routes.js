"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const daily_session_controller_1 = require("./daily-session.controller");
const dailySessionRoutes = (0, express_1.Router)();
dailySessionRoutes.get('/', daily_session_controller_1.getDailySession);
exports.default = dailySessionRoutes;
