import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addtoCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;

//Name
//initial state
//reducer
