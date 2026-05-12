const { getUsers } = require("../controllers/userControllers");
const express = require("express");

const router = express.Router();
router.get("/users", getUsers);
module.exports = router;
