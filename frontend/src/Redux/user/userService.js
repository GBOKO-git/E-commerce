
import axios from "axios";

const USER_API = process.env.NEXT_PUBLIC_API_URL;

// resgister fecthdata
export const register = (userData) => {
  return axios.post(`${USER_API}/user/register`, userData);
};

// login fecthdata
export const login = (userData) => {
  return axios.post(`${USER_API}/user/login`, userData);
};
