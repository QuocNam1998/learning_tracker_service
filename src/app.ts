import "dotenv/config";
import express from "express";
import weeksRoutes from "./features/weeks/weeks.routes";
import { errorHandler } from "./middlewares/errorHandler";
import dailySessionRoutes from "./features/daily-session/daily-session.routes";

const app = express();
app.use(express.json());
app.use("/", (_req, res) => {
  res.status(200).end("Welcome to learning_tracker_services!");
});
app.use("/weeks", weeksRoutes);
app.use("/daily-session", dailySessionRoutes);
app.use(errorHandler);

export default app;
