const Router = require('express');
const router = new Router();
const guitarController = require('../controller/guitarController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');
const brandController = require('../controller/brandController');
const authMiddleware = require('../middlewares/auth-middleware');

router.get('/guitar', guitarController.getGuitars);
router.get('/guitar/:id', guitarController.getOneGuitar);
router.post('/add', guitarController.addGuitar);
router.delete('/delete/:id', guitarController.deleteGuitar);
router.put('/update', guitarController.updateGuitar);

router.get('/type', guitarController.getTypes);
router.post('/addType', guitarController.addType);
router.delete('/type/:id', guitarController.deleteType);

router.get('/brand', brandController.getBrand);
router.post('/addBrand', brandController.addBrand);
router.delete('/brand/:id', brandController.deleteBrand);

module.exports = router;