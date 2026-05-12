import { Router } from "express";
import { getWeeks } from "./weeks.controller";

const router = Router();
router.get("/weeks", getWeeks);

export default router;
