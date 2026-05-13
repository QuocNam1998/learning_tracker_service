import './configs/db';
import express from 'express';
import { PORT } from './configs/env';
import appRoutes from './app';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(appRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
