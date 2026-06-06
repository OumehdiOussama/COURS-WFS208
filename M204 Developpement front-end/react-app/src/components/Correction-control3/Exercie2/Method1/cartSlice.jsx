import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.totalCount += 1;
      state.totalPrice += item.price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex(i => i.id === id);
      if (index !== -1) {
        state.totalCount -= 1;
        state.totalPrice -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;