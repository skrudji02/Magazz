const Router = require('express');
const router = new Router();
const adminController = require('../controller/adminController');
const roleMiddleware = require('../middlewaree/roleMiddleware');

router.get('/room', roleMiddleware(['ADMIN']), adminController.getNameTables);
router.get('/room/:table', roleMiddleware(['ADMIN']), adminController.getObjectTables);
router.get('/room/:table/add', roleMiddleware(['ADMIN']), adminController.addObjectTables);
router.post('/room/:table/add', roleMiddleware(['ADMIN']), adminController.postAddObjectTables);
router.get('/room/:table/:id', roleMiddleware(['ADMIN']), adminController.getDataObject);
router.post('/room/:table/:id', roleMiddleware(['ADMIN']), adminController.deleteObjectTables);

module.exports = router;