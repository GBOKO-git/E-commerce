const generateToken = require("../utils/generateToken");
const User = require("../models/user");

// logique d'enregistrement d'utilisateur
const userRegister = async (req, res) => {
  const { name, email, adress, password, isAdmin, tel } = req.body;

  try {
    console.log("📥 Données reçues :", req.body);

    const newUser = new User({ name, email, adress, password, isAdmin, tel });
    await newUser.save();

    res.status(200).json({
      sms: "✅ Utilisateur enregistré avec succès",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "❌ Erreur lors de la création de l'utilisateur",
      error: error.message,
    });
  }
};

// logique de connexion d'utilisateur
const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await user.matchPassword(password);

    // si l'utilisateur existe
    if (!user)
      return res.status(401).json({
        message: "email invalide",
      });
    // si l'utilisateur existe
    if (!isMatch)
      return res.status(401).json({
        message: "mot de passe invalide",
      });

    //   token et info de retour
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "erreur de server" });
  }
};

// logique de creation de compte utilisateur
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "l'utilisateur estiste déjà" });
    }

    // creation d'utilisateur s'il n'existe pas
    const user = await User.create({
      name,
      email,
      password,
    });

    // afficher les données apres creation de l'utilisateur
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "echec d'inscription" });
    }
  } catch (error) {
    res.status(500).json({ message: "erreur server" });
  }
};

// acces au profile
const profile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      createDat: user.createdAt,
    });
  } else {
    throw new Error("utilisateur non trouvé");
  }
};

// Permettre à un utilisateur modifier ses informations
const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404).json({message: "utilisateur non trouvé"});
    }
  } catch (error) {
    res.status(500).json({message: "erreur de server"})
  }
};

module.exports = { userRegister, register, login, profile, updateProfile };
