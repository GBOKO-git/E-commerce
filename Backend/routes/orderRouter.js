
const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const { postOrder, payOrder, getOrder, getOrderById } = require("../controllers/orderController")
// route  pour passer une commande
router.post("/", protect, postOrder)
// route  pour enregistrer le resultat de paiement d'une commande
router.put("/:id/payement", protect, payOrder)
// route  pour obtenir la liste  des commande
router.get("/", protect, getOrder)
// route  pour obtenir lune commande par son id
router.get("/:id", protect, getOrderById)


module.exports = router;