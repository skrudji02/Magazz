const Router = require('express');
const router = new Router();
const guitarController = require('../controller/guitar_controlers');
const basket = require('../controller/card');
const authController = require('../controller/authController');
const userController = require('../controller/userController');
const home = require('../controller/home');
const authMiddleware = require('../middlewaree/authMiddleware');
const roleMiddleware = require('../middlewaree/roleMiddleware');

router.get('/home', home.renderHome);
router.get('/guitar', guitarController.getGuitars);
router.get('/guitar/:id', guitarController.getOneGuitar);
router.get('/basket', basket.getProductsUser);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/registration', authController.getRegistration);
router.post('/registration', authController.postRegistration);

//admin
router.get('/admin', userController.getNameTables);
router.get('/admin/:table', userController.getObjectTables);
router.get('/admin/:table/add', userController.addObjectTables);
router.post('/admin/:table/add', userController.postAddObjectTables);
router.get('/admin/:table/:id', userController.getDataObject);
router.post('/admin/:table/:id', userController.deleteObjectTables);
//roleMiddleware(['ADMIN'])

module.exports = router;