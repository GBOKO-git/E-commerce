const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  iterms: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: String,
      price: { type: Number, required: true },
    },
  ],
  shippingAddress: {
    fullName: String,
    address: String,
    city: String,
    postCode: String,
    country: String
  },
  toxPrice: {type: Number, require: true, default: 0.0},
  shippingPrice: {type: Number, require: true, default: 0.0},
  totalPrice: {type: Number, require: true, default: 0.0},
  paymentMethod: {type: String, default: 'paypal'},
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String,
  },
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  isDelivered: { type: Boolean, default: false },
  deliveredAt: Date,
  createdAt: { type: Date, default: Date.now }
}, {timestamp: true});

module.exports = mongoose.model("order", orderSchema);
