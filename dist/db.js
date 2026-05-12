"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
pool.connect((err) => {
    if (!err) {
        console.log("✅ Connected to PostgreSQL!");
        return;
    }
    console.error("❌ Database connection failed:", err.message);
});
exports.default = pool;
