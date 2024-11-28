const express = require("express");
const { models } = require("./db");
require('dotenv').config();
const app = express();

app.use(express.json());

const PORT = process.env.APP_PORT || 3001;
app.listen(PORT);