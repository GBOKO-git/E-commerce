const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    adress: { type: String },
    password: { type: String, reaquire: true },
    isAdmin: { type: Boolean, default: false },
    tel: { type: String },
  },
  { timestamps: true }
);

// Crypter le mot de pass avant d'enregistrer l'utilisateur
userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next(); 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// comparer les mot de pass pendant la connection
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


module.exports = mongoose.model("user", userSchema);

