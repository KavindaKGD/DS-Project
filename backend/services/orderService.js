const Order = require('../models/orderModel');

exports.createOrder = async (orderData) => {
  return await Order.create(orderData);
};

exports.getAllOrders = async () => {
  return await Order.find();
};

exports.updateOrderStatus = async (orderId, newStatus) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");
  order.status = newStatus;
  await order.save();
  return order;
};

exports.linkCustomerToOrder = async (orderId, customerId) => {
  const order = await Order.findById(orderId);
  if (!order || order.customerId) throw new Error("Invalid or already linked order");
  order.customerId = customerId;
  await order.save();
  return order;
};
