const Router = require('express');
const router = new Router();
const authController = require('../controller/authController');
const check = require('../middlewaree/check');

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/registration', authController.getRegistration);
router.post('/registration', authController.postRegistration);
router.get('/exit', check, authController.exit);

module.exports = router;