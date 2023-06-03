require('dotenv').config();
const { createServer } = require('http');
const app = require('./src/app');

const server = createServer(app);

const API_PORT = process.env.API_PORT || 3013;

server.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`));