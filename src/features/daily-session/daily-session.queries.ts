import pool from '../../configs/db';

const getAllDailySession = async (startedAt: string) => {
  const result = await pool.query('select * from daily_session where date = $1 order by id asc', [
    '2026-05-11T08:42:46.838Z',
  ]);
  return result.rows;
};

const updateTaskQuery = async (query: string, params: Array<string>) => {
  const result = await pool.query(query, params);
  console.log('>>>result', result);
  return result.rows;
};

export { getAllDailySession, updateTaskQuery };
