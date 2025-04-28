const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    postCode: '',
    country: '',
  },
};

const shippingSlice = createSlice({
    name:"shipping",
    initialState,
    reducers: {
        setShippingAddress (state, action) {
            state.shippingAddress = action.payload;
        },
        resetShippingAddress(state) {
            state.shippingAddress = initialState.shippingAddress;
        },
    }
});

export const {setShippingAddress, resetShippingAddress} = shippingSlice.actions;
export default shippingSlice.reducer;