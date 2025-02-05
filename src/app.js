const express = require("express");
const bodyParser = require("body-parser");

const convertRoutes = require("./routes/convertRoutes.js");

const app = express();

app.use(bodyParser.json());

app.use("/", convertRoutes);

module.exports = app;
