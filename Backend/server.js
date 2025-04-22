
require("dotenv").config();
const express = require('express');
const mongodbConnection = require("./config/db");
const app = express();
const cors =require("cors")



app.use(express.json());
// Lier le frontend au backend
app.use(cors());
app.use((req, res, next) => {
    console.log(`➡️  ${req.method} ${req.url}`);
    next();
});

const userRoute = require('./routes/userRoute');
// USER ROUTE
app.use('/user', userRoute)


const productRoute = require('./routes/productRouter')
// USER ROUTE
app.use('/product', productRoute)

const orderRouter = require("./routes/orderRouter")
// order ROUTE
app.use('/order', orderRouter)


mongodbConnection();
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`Le server est lancé sur http://localhost:${PORT}`)
})