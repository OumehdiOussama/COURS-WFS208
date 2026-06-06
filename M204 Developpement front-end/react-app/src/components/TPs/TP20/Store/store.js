import { configureStore } from '@reduxjs/toolkit';
import voituresReducer from './reducer';

const store = configureStore({
  reducer: {
    Voitures: voituresReducer,
  },
});

export default store;