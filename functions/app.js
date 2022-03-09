const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

module.exports = {app};