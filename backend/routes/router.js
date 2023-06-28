const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const homeController = require('../controller/homeController');
const authMiddleware = require('../middlewares/auth-middleware');

router.use('/user', userRouter);
router.get('/home', homeController.renderHome);
router.use('/product', productRouter);

module.exports = router;