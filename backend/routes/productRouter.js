const Router = require('express');
const router = new Router();
const guitarController = require('../controller/guitarController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.get('/guitar', guitarController.getGuitars);
router.get('/guitar/:id', guitarController.getOneGuitar);
router.post('/guitarAdd', guitarController.addGuitar);
router.delete('/guitarDelete', guitarController.deleteGuitar);
router.put('/guitarUpdate', guitarController.updateGuitar);

router.get('/type', checkRoleMiddleware('ADMIN'), guitarController.getTypes);
router.post('/addType', checkRoleMiddleware('ADMIN'), guitarController.addType);
router.get('/brand', checkRoleMiddleware('ADMIN'), guitarController.getBrand);
router.post('/addBrand', checkRoleMiddleware('ADMIN'), guitarController.addBrand);

module.exports = router;