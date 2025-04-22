


const express = require('express');
const router = express.Router();
const {createProduct, getAllProduct, getOneProduct} = require("../controllers/productController")

// Log pour vérifier que la route est appelée
console.log("🔁 product Route /create appelée");

// route pour ajouter tout les produits
router.post('/create', createProduct);
// route pour lister tout les produits
router.get('/', getAllProduct);
// route pour lister  un produits
router.get('/:id', getOneProduct);


module.exports = router;
