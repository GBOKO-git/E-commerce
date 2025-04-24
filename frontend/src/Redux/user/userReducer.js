

export const logoutReducer = (state) => {
    state.user = null;
    state.token = null;
    state.error = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // ← IMPORTANT
  }

  export const setUserFromStorageReducer = (state, action) => {
    const { token, user } = action.payload || {};
  
    if (token && user) {
      state.user = user;
      state.token = token;
    }
  }