const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/orderMiddleware');

router.post('/',  orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.patch('/:orderId/status', orderController.updateOrderStatus);
router.patch('/:orderId/link-user', authMiddleware, orderController.linkOrder);

module.exports = router;
