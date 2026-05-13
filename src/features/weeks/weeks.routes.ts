import { Router } from 'express';
import { getWeeks } from './weeks.controller';

const router = Router();
router.get('/', getWeeks);

export default router;
