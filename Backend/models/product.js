
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, require: true},
    image: { type: String, require: true},
    description: { type: String, require: true},
    price: { type: Number, require: true, default: 0},
})
module.exports = mongoose.model("product", productSchema)