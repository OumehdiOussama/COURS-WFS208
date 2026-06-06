import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducer';

const store = configureStore({reducer: {compteur: Reducer},
});

export default store;