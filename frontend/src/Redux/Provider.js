
"use client";

import { Provider } from "react-redux";
import store from "./Store";
import InitUser from "./InitUsers";


export const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <InitUser/>
      {children}
    </Provider>
  );
};















// "use client";
// import { Provider } from "react-redux";
// import store from "./Store";

// export const Providers = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };


