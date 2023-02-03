const Router = require('express');
const router = new Router();
const guitarController = require('../controller/guitarController');
const check = require('../middlewaree/check');
const home = require('../controller/home');

router.get('/guitar', check, guitarController.getGuitars);
router.get('/guitar/:id', guitarController.getOneGuitar);
router.get('/home', check, home.renderHome);

module.exports = router;