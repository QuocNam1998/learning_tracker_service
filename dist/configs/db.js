"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const env_1 = require("./env");
const pool = new pg_1.Pool({
    connectionString: env_1.DATABASE_URL,
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
exports.default = pool;
