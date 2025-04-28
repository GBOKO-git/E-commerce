const express = require('express');
const Order = require('../models/order');

// logique  pour passer une commande
const postOrder = async (req, res) => {
  const {
    items,
    shippingAddress,
    toxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
  } = req.body;

  if (!items && items.length === 0) {
    res.status(404).json({ message: "aucun article dans la commande" });
  }

  const order = new Order({
    user: req.user._id,
    items,
    shippingAddress,
    toxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
  });

  const createdOreder = await order.save();
  res.status(201).json(createdOreder);
};

// logique POUR SUVEGARDER LE RESULTAT DE PAIEMENT
const payOrder = async (req, res) => {

  const order = await Order.findById(req.params.id);

  if (order) {

    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address
    };

    const updateOrder = await order.save();
    res.status(201).json(updateOrder)
  } else {
    res.status(404).json({
      message: "commande non trouvé"
    })
  }
};

// logique pour obtenir la liste de commande
const getOrder = async (req, res) => {
  try {
    const orders = await Order.find({user:req.params.id});
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({
      message: "erreur de  server"
    })
  }
};

// logique pour obtenir une commande
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email");
    if (!order) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};



module.exports = { postOrder, payOrder, getOrder, getOrderById };
