import { Router } from "express";
import { getDailySession } from "./daily-session.controller";
const dailySessionRoutes = Router();
dailySessionRoutes.get("/daily-session", getDailySession);
