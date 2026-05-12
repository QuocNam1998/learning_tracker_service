const pool = require("../db");

const getAllUsers = async () => {
  const result = await pool.query("select * from weeks");
  return result.rows;
};

module.exports = {
  getAllUsers,
};
