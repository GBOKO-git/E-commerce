
const { createSlice } = require("@reduxjs/toolkit");

// l'etat initial du panier
const initialState = {
  cartItems: [], // TABLEAU DES PRODUITS DU PANIER
  shippingAddress: {},
  totalQuantity: 0,
  totalPrice: 0,
  paymentMethode: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Ajouter un produit au panier
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    // Supprimer un produit du panier
    removeToCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i._id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.quantity * item.price;
        state.cartItems = state.cartItems.filter((i) => i._id !== id);
      }
    },

    // Vider le panier
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },

    // Choisir le mode paiement
    savePaymentMtehod: (state, action) => {
      state.paymentMethode = action.payload;
    },

    // Enregisytrer l'adresse de l'acheteur
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

// Export des actions
export const {
  addToCart,
  removeToCart,
  clearCart,
  savePaymentMethod,
  saveShippingAddress,
} = cartSlice.actions;


// Eport du reducer pour pouvoir l'utiliser dans le store
export default cartSlice.reducer;
