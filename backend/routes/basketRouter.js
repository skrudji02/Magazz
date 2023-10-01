const Router = require('express');
const router = new Router();
const basketController = require('../controller/basketController');
const authMiddleware = require('../middlewares/auth-middleware');

router.get('/', basketController.getBasketUser);
router.post('/', basketController.addProductBasket);
router.delete('/', basketController.deleteProductInBasket);

module.exports = router;