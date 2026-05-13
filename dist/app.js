"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = require("express");
const weeks_routes_1 = __importDefault(require("./features/weeks/weeks.routes"));
const daily_session_routes_1 = __importDefault(require("./features/daily-session/daily-session.routes"));
const appRoutes = (0, express_1.Router)();
appRoutes.get('/', (_, res) => {
    res.status(200).json('Welcome to learning_tracker_service!');
});
appRoutes.use('/weeks', weeks_routes_1.default);
appRoutes.use('/daily-session', daily_session_routes_1.default);
exports.default = appRoutes;
