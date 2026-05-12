"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weeks_controller_1 = require("./weeks.controller");
const router = (0, express_1.Router)();
router.get("/weeks", weeks_controller_1.getWeeks);
exports.default = router;
