const { AppError } = require("../middlewares/errorHandler");
const { getAllUsers } = require("../queries/userQueries");

const getUsers = async (_, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(new AppError(err.message, 500));
  }
};
module.exports = {
  getUsers,
};
