import { createSlice } from '@reduxjs/toolkit';

const compteurSlice = createSlice({
  name: 'compteur',
  initialState: { count: 0 },
  reducers: {
    incrementer: (state) => {
      state.count += 1;
    },
    decrementer: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { incrementer, decrementer, reset } = compteurSlice.actions;
export default compteurSlice.reducer;