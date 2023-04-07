const Router = require('express');
const router = new Router();
const adminController = require('../controller/adminController');
const roleMiddleware = require('../middlewaree/roleMiddleware');

router.get('/', roleMiddleware(['ADMIN']), adminController.getNameTables);
router.get('/acoustic_guitars', roleMiddleware(['ADMIN']), adminController.getObjectTables);
router.get('/acoustic_guitars/add', roleMiddleware(['ADMIN']), adminController.addObjectTables);
router.post('/acoustic_guitars/add', roleMiddleware(['ADMIN']), adminController.postAddObjectTables);
router.delete('/acoustic_guitars/:id', roleMiddleware(['ADMIN']), adminController.deleteObjectTables);


module.exports = router;