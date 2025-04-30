
"use client";

import { Provider } from "react-redux";
import InitUser from "./InitUsers";
import store from "./store/Store";


export const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <InitUser/>
      {children}
    </Provider>
  );
};
