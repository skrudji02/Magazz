const Router = require('express');
const router = new Router();
const guitarController = require('../controller/guitarController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');
const brandController = require('../controller/brandController');
const ratingController = require('../controller/ratingController');
const authMiddleware = require('../middlewares/auth-middleware');

router.get('/types', guitarController.getTypes);
router.get('/types/:id', guitarController.getGuitars);
router.get('/types/:id/product/:id', guitarController.getOneGuitar);
router.post('/types/:id/product/:id', ratingController.setRatingProduct);

router.post('/add', checkRoleMiddleware, guitarController.addGuitar);
router.delete('/delete/:id', checkRoleMiddleware, guitarController.deleteGuitar);
router.put('/update', checkRoleMiddleware, guitarController.updateGuitar);

router.get('/type', guitarController.getTypes);
router.post('/addType',  guitarController.addType);
router.delete('/type/:id',  guitarController.deleteType);

router.get('/brand', brandController.getBrand);
router.post('/brand', brandController.addBrand);
router.delete('/brand/:id', checkRoleMiddleware, brandController.deleteBrand);

module.exports = router;