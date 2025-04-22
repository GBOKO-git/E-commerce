
// connexion à la base de donnée

const mongoose = require('mongoose')

const mongodbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection à mongodb reussie avec succes !")
    } catch (error) {
       console.log("erreur lors de la connection") 
    }
}
module.exports = mongodbConnection;