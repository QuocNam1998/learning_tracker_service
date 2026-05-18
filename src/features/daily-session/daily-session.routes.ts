import { Router } from 'express';
import { getDailySession, updateTask } from './daily-session.controller';
const dailySessionRoutes = Router();
dailySessionRoutes.get('/', getDailySession);
dailySessionRoutes.patch('/', updateTask);

export default dailySessionRoutes;
