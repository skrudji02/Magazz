const Router = require('express');
const router = new Router();
const basket = require('../controller/cartController');
const check = require('../middlewaree/check');
const authMiddleware = require('../middlewaree/authMiddleware');

router.get('/', authMiddleware, basket.getProductsUser);
router.delete('/:id', authMiddleware, basket.deleteFromBasket);
router.post('/:id', authMiddleware, basket.addInBasket);

module.exports = router;