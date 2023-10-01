const Router = require('express');
const router = new Router();
const authController = require('../controller/authController');
const {validationAuth} = require('../middlewares/auth-validation');

router.post('/login', validationAuth, authController.login);
router.post('/registration', validationAuth, authController.registration);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);

module.exports = router;
