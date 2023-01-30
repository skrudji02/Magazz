const Router = require('express');
const router = new Router();
const guitarController = require('../controller/guitarController');
const check = require('../middlewaree/check');
const home = require('../controller/home');
const basket = require('../controller/card');

router.get('/guitar', check, guitarController.getGuitars);
router.get('/guitar/:id', check, guitarController.getOneGuitar);
router.get('/home', check, home.renderHome);
router.get('/basket', check, basket.getProductsUser);

module.exports = router;