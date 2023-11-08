const Router = require('express');
const router = new Router();
const authController = require('../controller/authController');
const {validationAuth} = require('../middlewares/auth-validation');
const authMiddleware = require('../middlewares/auth-middleware');
const homeController = require('../controller/homeController');

router.post('/login', authController.login);
router.post('/registration', validationAuth, authController.registration);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);
//router.get('/home', authMiddleware, homeController.renderHome);

module.exports = router;
