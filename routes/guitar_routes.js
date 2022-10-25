const Router = require('express')
const router = new Router()
const guitarController = require('../controller/guitar_controlers')
const basket = require('../controller/card')


router.get('/guitar', guitarController.getGuitars)
router.get('/guitar/:id', guitarController.getOneGuitar)
router.get('/basket', basket.getProductsUser)

module.exports = router