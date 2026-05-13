import pool from '../../configs/db';

export const getAllWeeks = async () => {
  const result = await pool.query('SELECT * FROM weeks');
  return result.rows;
};
