const Router = require('express');
const router = new Router();
const guitarController = require('../controller/guitarController');

router.get('/guitar', guitarController.getGuitars);
router.get('/guitar/:id', guitarController.getOneGuitar);

module.exports = router;