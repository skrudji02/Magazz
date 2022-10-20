const Router = require('express')
const router = new Router()
const guitarController = require('../controller/guitar_controlers')


router.get('/guitar', guitarController.getGuitars)




module.exports = router