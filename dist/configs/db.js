"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const env_1 = require("./env");
const pool = new pg_1.Pool({
    connectionString: env_1.DATABASE_URL,
    ssl: true,
});
pool.connect((err) => {
    if (!err) {
        console.log('✅ Connected to PostgreSQL!');
        return;
    }
    console.error('❌ Database connection failed:', err.message);
});
exports.default = pool;
