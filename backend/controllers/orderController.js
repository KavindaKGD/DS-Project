const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
    const customerId = req.user ? req.user.customerId : null;
    const { restaurantId, items, totalAmount } = req.body;

    const order = await orderService.createOrder({
      customerId,
      restaurantId,
      items,
      totalAmount,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error creating order', error: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders', error: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const updatedOrder = await orderService.updateOrderStatus(orderId, status);
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: 'Error updating status', error: err.message });
  }
};

exports.linkOrder = async (req, res) => {
  const { orderId } = req.params;
  const customerId = req.user.customerId;

  try {
    const order = await orderService.linkCustomerToOrder(orderId, customerId);
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
