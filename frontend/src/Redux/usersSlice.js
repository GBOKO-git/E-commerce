import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_API = process.env.NEXT_PUBLIC_API_URL;

// resgister fecthdata
export const registerUser = createAsyncThunk(
  "/user/register",
  async (userData) => {
    const res = await axios.post(`${USER_API}/user/register`, userData);
    return res.data;
  }
);

// login fecthdata
export const loginUser = createAsyncThunk("user/login", async (userData) => {
  const res = await axios.post(`${USER_API}/user/login`, userData);
  return res.data;
});

// create slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    loading: null,
    error: null,
  },

  // logout
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },

  // resgister 
  extraReducers: (builder) => {
    builder
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading =false;
        }) 
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        //login
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        });
  },
});
 export const  {logout} = userSlice.actions;
 export default userSlice.reducer;