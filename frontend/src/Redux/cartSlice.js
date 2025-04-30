const { createSlice } = require("@reduxjs/toolkit");

// l'etat initial du panier
const initialState = {
  cartItems:
    typeof window !== "undefined" && localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [], // TABLEAU DES PRODUITS DU PANIER

  shippingAddress: {},
  totalQuantity: 0,
  totalPrice: 0,
  savePaymentMethod: null,
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
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push({ ...item });
      }
    
      state.totalQuantity += item.quantity;
      state.totalPrice += item.price * item.quantity;
    
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    

    // Supprimer un produit du panier
    removeToCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i._id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.quantity * item.price;
        state.cartItems = state.cartItems.filter((i) => i._id !== id);
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify([]));
      }
    },

    // Vider le panier
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;

      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify([]));
      }
    },

    // Choisir le mode paiement
    savePaymentMethod: (state, action) => {
      state.savePaymentMethod = action.payload;
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
