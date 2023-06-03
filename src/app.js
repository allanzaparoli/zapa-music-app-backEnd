const express = require('express');
require('express-async-errors');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const router = require('./routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors({
    origin: ['https://zapa-music-app.pages.dev', 'http://localhost:3000'],
    credentials: true,
}));

app.use(express.json());

app.use(cookieParser());

app.use(router);

app.use(errorMiddleware);

module.exports = app;
