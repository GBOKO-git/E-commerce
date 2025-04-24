import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "./userService";


// resgister fecthdata
export const registerUser = createAsyncThunk("user/register", async (userData) => {
    const res = await  register(userData);
    return res.data;
  }
);

export const loginUser = createAsyncThunk("user/login", async(userData) => {
    const res = await login(userData);
    return res.data;
})