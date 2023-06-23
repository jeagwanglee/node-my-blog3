const express = require('express');
const router = express.Router();

const postsRouter = require('./posts.route.js');
const usersRouter = require('./users.route.js');
const authRouter = require('./auth.js');

router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;
