

const express = require('express');
const router = express.Router();
const {userRegister, login, register, profile, updateProfile} = require("../controllers/userController");
const { protect } = require('../middleware/auth');

// Log pour vérifier que la route est appelée
console.log("🔁 Route /create appelée");

//route pour ajouter un utilisateur
router.post('/create', userRegister);
//route pour creer un utilisateur
router.post('/register', register);
//route pour Connecter un utilisateur
router.post('/login', login);
// route pour acces au profile un utilisateur
router.get('/profile', protect, profile);
// route pour modifier au profile un utilisateur
router.put('/profile', protect, updateProfile);

updateProfile
module.exports = router;
































// const express = require('express');
// const router = express.Router();

// console.log("🔁 Route /create appelée");

// router.post('/create', 
    
//     async (req , res) => {
    
//         const {name, email, adress, password,isAdmin, tel} = req.body;
        
//         try {
//             console.log('name');
//             const newUser =  new User({name, email, adress, password,isAdmin, tel});
//             await newUser.save();
//             res
//                 .status(200)
//                 .json({sms: "utilisateur enregistré avec succes", data:newUser});
    
//         } catch (error) {
//             res.status(500).json({
//                 message: "Erreur lors de la création de la personne",
//                 error: error.message,
//               });
//         }
//     }

// );


// module.exports = router;