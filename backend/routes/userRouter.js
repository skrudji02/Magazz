const Router = require('express');
const router = new Router();
const authController = require('../controller/authController');

router.post('/login', authController.login);
router.post('/registration', authController.registration);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);

module.exports = router
