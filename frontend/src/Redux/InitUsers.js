

"use client";

import { logout, setUserFromStorage } from "./user/userSlice";

const { useEffect } = require("react");
const { useDispatch } = require("react-redux");

// Ce composant permet d'accéder au dispatch
const InitUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    console.log("InitUser > token:", token);
    console.log("InitUser > user:", user);

    if (token && user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser && typeof parsedUser === "object") {
          dispatch(setUserFromStorage({ user: parsedUser, token }));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.error("Erreur de parsing user localStorage", err);
        dispatch(logout()); // ← Sécurité supplémentaire
      }
    } else {
      dispatch(logout()); // ← si pas de token/user = on reset l'état
    }
  }, [dispatch]);

  return null;
};

export default InitUser;
