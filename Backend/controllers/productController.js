const Product = require('../models/product')

// Ajouter des image
const createProduct = async (req , res) => {
    console.log("🔁 Route /create appelée");

    const {name, image, description, price} = req.body;
    
    try {
        console.log('name');
        const newProduct =  new Product({name, image, description, price});
        await newProduct.save();
        res
            .status(200)
            .json({sms: `produit:${name} enregistré avec succes`, data:newProduct});

    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la création du produit",
            error: error.message,
          });
    }
}

// Liste de tous les produits
 const getAllProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products);
 }
// Détail d’un produit
const getOneProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else{res.status(404).json({message: "produit introuvable"});}
    } catch (error) {
        res.status(500).json({message: "Erreur de server"});
    }
}

module.exports = {createProduct, getAllProduct, getOneProduct} ;
