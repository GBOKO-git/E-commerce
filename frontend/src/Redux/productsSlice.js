import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Appel à l'API backend pour tous les produit
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
  return res.data;
});

// Appel à l'API backend pour obtenir un  produit
export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`
    );
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    product: null,
    loading: false,
    error: null,
    searchQuery: "",  // Champ de recherche ajouté

  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    // gerer la requete de tout les produits
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // gerer la requete pour un produits
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {setSearchQuery} = productsSlice.actions
export default productsSlice.reducer;
