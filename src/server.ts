import './configs/db';
import express from 'express';
import { PORT } from './configs/env';
import appRoutes from './app';
import { errorHandler } from './middlewares/errorHandler';
import configedCors from './configs/cors';

const app = express();

app.use(configedCors);
app.use(express.json());
app.use(appRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err.message, err.stack);
  // Connection errors from pg are recoverable — don't exit the process.
  if (err.message?.includes('Connection terminated') || err.message?.includes('connect ECONNREFUSED')) {
    return;
  }
  process.exit(1);
});
