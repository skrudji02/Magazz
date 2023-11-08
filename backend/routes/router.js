const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const homeController = require('../controller/homeController');
const basketRouter = require('./basketRouter');

router.use('/user', userRouter);
router.get('/home', homeController.topProduct);
router.use('/catalog', productRouter);
router.use('/basket', basketRouter);

module.exports = router;