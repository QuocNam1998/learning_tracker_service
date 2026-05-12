import pool from '../../db';

const getAllDailySession = async () => {
  const result = await pool.query('select * from daily_session');
  return result.rows;
};

export { getAllDailySession };
