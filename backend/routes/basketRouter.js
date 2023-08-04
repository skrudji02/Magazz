const Router = require('express');
const router = new Router();
const basketController = require('../controller/basketController');

router.get('/', basketController.getBasketUser);
router.post('/', basketController.addProductBasket);
router.delete('/', basketController.deleteProductInBasket);

module.exports = router;