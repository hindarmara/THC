const express = require("express");
const app = express();
require("dotenv").config();
let ejs = require("ejs");

//.env variables
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
