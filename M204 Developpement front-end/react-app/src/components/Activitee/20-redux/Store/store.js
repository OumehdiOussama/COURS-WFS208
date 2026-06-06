import { legacy_createStore } from 'redux';

import reducerCompteur from './reducerCompteur';

const store = legacy_createStore(reducerCompteur);

export default store;