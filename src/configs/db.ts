import { Pool } from 'pg';
import { DATABASE_URL } from './env';
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: true,
  keepAlive: true,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.connect((err) => {
  if (!err) {
    console.log('✅ Connected to PostgreSQL!');
    return;
  }
  console.error('❌ Database connection failed:', err.message);
});

// Without this, an idle client error emits an unhandled 'error' event and crashes the process.
pool.on('error', (err) => {
  console.error('❌ Unexpected pool client error:', err.message);
});

export default pool;
