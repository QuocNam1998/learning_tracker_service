const { Pool } = require("pg");
const pool = new Pool({
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
module.exports = pool;
