const Router = require('express');
const router = new Router();
const basket = require('../controller/cartController');
const check = require('../middlewaree/check');

router.get('/', check, basket.getProductsUser);
router.delete('/', check, basket.deleteFromBasket);
router.post('/:id', basket.addInBasket);

module.exports = router;