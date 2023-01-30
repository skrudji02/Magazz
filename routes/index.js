const Router = require('express');
const router = new Router();
const guitarRouter = require('./guitarRouter');
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter');

router.use('/magazz', guitarRouter);
router.use('/user', userRouter);
router.use('/admin', adminRouter);

module.exports = router;