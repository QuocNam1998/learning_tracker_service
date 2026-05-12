import { getAllDailySession } from "./daily-session.queries";

const getDailySession = async () => {
  const result = await getAllDailySession();
  return result;
};
export { getDailySession };
