require("dotenv").config();
const pool = require("./db");
const express = require("express");
const { createServer } = require("node:http");
const app = express();
const getUserByIdQuery = "select * from users where id = $1";
const userRoutes = require("./routes/userRoutes");
app.use(express.json()); //Parse incoming request to Javascript object
app.use("/", userRoutes);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log("[Error]", err);
    return;
  }
  console.log("Server is running on port:3000");
});
