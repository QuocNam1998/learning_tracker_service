import { Pool } from 'pg';
import { DATABASE_URL } from './env';
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: true,
});

pool.connect((err) => {
  if (!err) {
    console.log('✅ Connected to PostgreSQL!');
    return;
  }
  console.error('❌ Database connection failed:', err.message);
});

export default pool;
