const Router = require('express');
const router = new Router();
const authController = require('../controller/authController');
const userController = require('../controller/userController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/login', authController.login);
router.post('/registration', authController.registration);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);

// Router for table users
router.get('/users', checkRoleMiddleware('ADMIN'), userController.getUsers);
router.post('/addUser', checkRoleMiddleware('ADMIN'), userController.addUsers);
router.delete('/deleteUser', checkRoleMiddleware('ADMIN'), userController.deleteUsers);
router.put('/refreshUser', checkRoleMiddleware('ADMIN'), userController.updateUsers);

module.exports = router;
