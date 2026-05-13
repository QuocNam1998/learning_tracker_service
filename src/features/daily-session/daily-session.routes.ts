import { Router } from 'express';
import { getDailySession } from './daily-session.controller';
const dailySessionRoutes = Router();
dailySessionRoutes.get('/', getDailySession);

export default dailySessionRoutes;
