import { createSlice } from "@reduxjs/toolkit";
import { logoutReducer, setUserFromStorageReducer } from "./userReducer";
import { loginUser, registerUser } from "./userActions";

// create slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    token: null,
    loading: null,
    error: null,
  },

  // logout
  reducers: {
    logout: logoutReducer,
    setUserFromStorage: setUserFromStorageReducer,
  },

  // resgister
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { token, ...user } = action.payload;
        state.user = user;
        state.token = token;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        // Forcer le rechargement pour que InitUser récupère les données
        window.location.reload();
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { logout, setUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
