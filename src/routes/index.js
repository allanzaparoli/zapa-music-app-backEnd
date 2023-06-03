const express = require('express');
const userRouter = require('./user.routes');

const router = express.Router();

router.use('/users', userRouter);

router.get('/ping', (_req, res) => res.status(200).json({ message: 'It works!' }));

module.exports = router;
