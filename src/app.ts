import "dotenv/config";
import express from "express";
import weeksRoutes from "./features/weeks/weeks.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use("/", weeksRoutes);
app.use(errorHandler);

export default app;
