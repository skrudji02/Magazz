const Router = require('express');
const router = new Router();
const guitarRouter = require('./guitarRouter');
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter');
const cartRouter = require('./cartRouter');

router.use('/magazz', guitarRouter);
router.use('/user', userRouter);
router.use('/admin', adminRouter);
router.use('/cart', cartRouter);

module.exports = router;