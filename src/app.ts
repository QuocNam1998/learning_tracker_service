import 'dotenv/config';
import { Router } from 'express';
import weeksRoutes from './features/weeks/weeks.routes';
import dailySessionRoutes from './features/daily-session/daily-session.routes';

const appRoutes = Router();
appRoutes.get('/', (_, res) => {
  res.status(200).json('Welcome to learning_tracker_service!');
});
appRoutes.use('/weeks', weeksRoutes);
appRoutes.use('/daily-session', dailySessionRoutes);

export default appRoutes;
